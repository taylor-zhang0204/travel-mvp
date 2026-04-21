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

## Tamagui v2

This project uses **Tamagui v2** for UI components.

### Tamagui v2 API Differences

- **`ButtonText` is not exported in v2** - Use `Text` directly inside Button
- Button `color` prop was removed - wrap text with `Text` component and set color there
- Use `variant` prop instead of `theme` for button variants

### Tamagui Props Note

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

## Icon Library

Uses **`@tamagui/lucide-icons-2`** for icons. Import from:

```typescript
import { ChevronLeft, Search, Calendar, Location, ... } from '@tamagui/lucide-icons-2';
```

Available icons: ChevronLeft, Search, Calendar, Location, Plus, Minus, People, etc.

## UI Components

**优先使用 Tamagui 组件**（如 XStack, YStack, Button, Text, Sheet 等）。

组件文档参考：`.claude/memory/tamagui-docs.md`

## Tamagui Component Style Shorthand

```json
{
  "b": "bottom",
  "bg": "backgroundColor",
  "content": "alignContent",
  "grow": "flexGrow",
  "items": "alignItems",
  "justify": "justifyContent",
  "l": "left",
  "m": "margin",
  "maxH": "maxHeight",
  "maxW": "maxWidth",
  "mb": "marginBottom",
  "minH": "minHeight",
  "minW": "minWidth",
  "ml": "marginLeft",
  "mr": "marginRight",
  "mt": "marginTop",
  "mx": "marginHorizontal",
  "my": "marginVertical",
  "p": "padding",
  "pb": "paddingBottom",
  "pl": "paddingLeft",
  "pr": "paddingRight",
  "pt": "paddingTop",
  "px": "paddingHorizontal",
  "py": "paddingVertical",
  "r": "right",
  "rounded": "borderRadius",
  "select": "userSelect",
  "self": "alignSelf",
  "shrink": "flexShrink",
  "t": "top",
  "text": "textAlign",
  "z": "zIndex"
}
```
