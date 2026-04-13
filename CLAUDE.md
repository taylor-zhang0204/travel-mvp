# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expo SDK 55 project with file-based routing (expo-router), React Native 0.83, and Tamagui for UI components.

## Commands

```bash
pnpm install          # Install dependencies
pnpm start            # Start Expo dev server
pnpm ios              # Start iOS
pnpm android          # Start Android
pnpm web              # Start Web
pnpm lint             # Run ESLint
pnpm reset-project    # Move starter code to app-example/, reset app/
```

## Architecture

- **`app/`** - Main app code with expo-router file-based routing
- **`app-example/`** - Preserved original template code (from `npm run reset-project`)
- **`components/`** - Shared components (e.g., `DateRangePicker.tsx`)
- **`tamagui.config.ts`** - Tamagui configuration (uses `@tamagui/config/v5`)
- **`babel.config.js`** - Babel config with Tamagui babel plugin for props transformation

## Tamagui Props Note

Props like `maxW`, `p`, `self`, `gap` are Tamagui shorthand props. The `@tamagui/babel-plugin` must be configured in `babel.config.js` to transform these:

```js
plugins: [
  ['@tamagui/babel-plugin', {
    components: ['tamagui'],
    config: './tamagui.config.ts',
  }],
],
```

If TypeScript errors appear for these props, restart Metro bundler: `npx expo start --clear`

## Package Manager

Uses **pnpm** (not npm or yarn). All commands should use `pnpm`.
