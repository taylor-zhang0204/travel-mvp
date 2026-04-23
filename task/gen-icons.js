/* eslint-disable */

const { execSync } = require('node:child_process');
const { readdirSync, mkdirSync, readFileSync, writeFileSync, existsSync } = require('node:fs');
const path = require('node:path');

const iconsPath = path.resolve(__dirname, '../components/icons');
const assetsPath = path.resolve(iconsPath, 'assets');
const srcPath = path.resolve(iconsPath, 'src');

/**
 * Post-process generated component:
 * 1. Add BaseProps import and Pressable import
 * 2. Extract SVG elements used and build proper imports
 * 3. Replace component signature to use BaseProps
 * 4. Wrap with Pressable for onPress support
 */
const postProcessComponent = (content, componentName) => {
  // Remove xmlns attribute
  let processed = content.replace(/xmlns="[^"]*"/g, '');

  // Extract SVG elements used in the component
  const svgElements = [];
  const elementMatches = processed.matchAll(
    /<(G|Path|Defs|ClipPath|LinearGradient|Stop|Ellipse|Rect|Circle|Line|Polyline|Polygon|Use|Symbol|Image)(?:\s|[^>]*[^>])*>/g
  );
  const seenElements = new Set();
  for (const match of elementMatches) {
    const el = match[1];
    if (!seenElements.has(el)) {
      seenElements.add(el);
      svgElements.push(el);
    }
  }

  // Build imports
  const svgImportElements = svgElements.length > 0 ? `, { ${svgElements.join(', ')} }` : '';
  const imports = `import * as React from 'react';
import { Pressable } from 'react-native';
import Svg${svgImportElements} from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

`;

  // Find the Svg element content and extract viewBox
  const svgMatch = processed.match(/<Svg([^>]*)>/);
  const svgAttrs = svgMatch ? svgMatch[1] : '';

  // Remove width/height and {...props} from svgAttrs but keep viewBox and fill
  const cleanedSvgAttrs = svgAttrs
    .replace(/\s*width=\{[^}]*\}/g, '')
    .replace(/\s*height=\{[^}]*\}/g, '')
    .replace(/\s*\{\.\.\.props\}/g, '')
    .trim();

  // Find the inner content of Svg (everything between <Svg ...> and </Svg>)
  const svgContentMatch = processed.match(/<Svg[^>]*>([\s\S]*?)<\/Svg>/);
  const svgInnerContent = svgContentMatch ? svgContentMatch[1].trim() : '';

  // Build new component
  const newComponent = `${imports}const ${componentName} = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg ${cleanedSvgAttrs} width={size} height={size}>
        ${svgInnerContent}
      </Svg>
    </Pressable>
  );
};

export default ${componentName};
`;

  return newComponent;
};

/**
 * Generate native SVG components using @svgr/cli
 */
const generateComponents = async () => {
  // Incremental mode: do NOT remove existing src directory.
  // Existing generated components will be preserved and skipped.

  // Find all SVG files and track their directories
  const svgFiles = [];

  const findSvgs = (dir, relativePath = '') => {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        findSvgs(fullPath, path.join(relativePath, entry.name));
      } else if (entry.name.endsWith('.svg')) {
        svgFiles.push({
          fullPath,
          relativePath,
          fileName: entry.name,
        });
      }
    }
  };

  findSvgs(assetsPath);

  // Track index files to create. Pre-populate from existing index.ts so we
  // preserve previously generated component exports.
  const indexFiles = new Map();
  // Track which files were newly generated this run (for prettier).
  const newlyGenerated = [];

  const ensureIndexEntry = (dirKey, componentName) => {
    if (!indexFiles.has(dirKey)) {
      const indexPath = path.join(srcPath, dirKey === '.' ? '' : dirKey, 'index.ts');
      const existing = new Set();
      if (existsSync(indexPath)) {
        const content = readFileSync(indexPath, 'utf8');
        const re = /export\s*\{\s*default\s+as\s+(\w+)\s*\}/g;
        let m;
        while ((m = re.exec(content)) !== null) {
          existing.add(m[1]);
        }
      }
      indexFiles.set(dirKey, existing);
    }
    indexFiles.get(dirKey).add(componentName);
  };

  for (const { fullPath, relativePath, fileName } of svgFiles) {
    // Create directory structure in src
    const outputDir = path.join(srcPath, relativePath);
    mkdirSync(outputDir, { recursive: true });

    // Convert kebab-case to PascalCase for component name
    const componentName = path
      .basename(fileName, '.svg')
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    const generatedFile = path.join(outputDir, `${componentName}.tsx`);
    const dirKey = relativePath || '.';

    // Incremental: skip if component already exists; just ensure it is
    // referenced in the index file.
    if (existsSync(generatedFile)) {
      ensureIndexEntry(dirKey, componentName);
      console.log(`Skipped (exists): ${generatedFile}`);
      continue;
    }

    // Generate native component using svgr
    try {
      execSync(`npx @svgr/cli --native --typescript --icon -d ${outputDir} ${fullPath}`, {
        stdio: 'pipe',
      });
    } catch (err) {
      console.error(`Error generating component for ${fullPath}`);
      continue;
    }

    if (existsSync(generatedFile)) {
      const content = readFileSync(generatedFile, 'utf8');
      const processed = postProcessComponent(content, componentName);
      writeFileSync(generatedFile, processed);
      newlyGenerated.push(generatedFile);
      ensureIndexEntry(dirKey, componentName);
      console.log(`Generated: ${generatedFile}`);
    }
  }

  // Write/refresh index files (merged: existing entries + new ones)
  for (const [dir, components] of indexFiles) {
    const indexPath = path.join(srcPath, dir === '.' ? '' : dir, 'index.ts');
    const exports = [...components]
      .sort()
      .map((c) => `export { default as ${c} } from './${c}';`)
      .join('\n');
    writeFileSync(indexPath, exports + '\n');
    console.log(`Updated index: ${indexPath}`);
  }

  return newlyGenerated;
};

generateComponents().then((newlyGenerated = []) => {
  if (newlyGenerated.length > 0) {
    // Only format newly generated files to avoid touching existing ones.
    const fileArgs = newlyGenerated.map((f) => `"${f}"`).join(' ');
    execSync(`npx prettier --write ${fileArgs}`);
  }
  console.log(`\nIcon generation complete! (${newlyGenerated.length} new)`);
  console.log('Components location: components/icons/src/');
});
