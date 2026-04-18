// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      '.tamagui/*',
      'android/*',
      'ios/*',
      '.expo/*',
      '*.config.js',
      '*.config.ts',
      '!eslint.config.js',
      '*.d.ts',
      'expo-env.d.ts',
      '*.log',
      'npm-debug.log*',
      'pnpm-debug.log*',
      'coverage/*',
      '*.tmp',
      '*.temp',
      '.cache/*',
    ],
  },
  {
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
