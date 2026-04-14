## Context

The app currently has no internationalization support. All user-facing strings are hardcoded in components. To support Chinese (zh) and English (en) locales, we need to introduce an i18n layer that manages translations, locale detection, and language switching.

## Goals / Non-Goals

**Goals:**
- Support zh and en locales with complete translation coverage
- Detect device locale on startup and default appropriately
- Allow users to manually switch language
- Provide locale-aware date/number formatting

**Non-Goals:**
- Right-to-left (RTL) language support
- Pluralization rules beyond simple singular/plural
- Dynamic string interpolation complexity beyond basic substitution

## Decisions

### 1. Library: expo-localization + i18n-js

**Decision:** Use `expo-localization` to get device locale, `i18n-js` for translation management.

**Rationale:** Native + lightweight. `expo-localization` is the Expo-recommended way to get locale info. `i18n-js` is battle-tested and small. Avoids heavier solutions like react-i18next when we only need basic translation support.

**Alternative considered:** react-i18next — heavier, more features than needed for a two-locale app.

### 2. Translation File Structure

**Decision:** JSON files per locale at `i18n/{locale}.json`, placed at project root (not inside `app/` which is expo-router routing).

**Rationale:** Root-level placement keeps i18n separate from routing. Each locale is isolated. English (en) is the default/base language with zh falling back to en for missing translations.

### 3. Language Switcher

**Decision:** A simple settings/UI toggle that stores preference in AsyncStorage.

**Rationale:** Persists across sessions. AsyncStorage is already available in Expo.

### 4. Architecture

**Decision:** Create an i18n module (`i18n/index.ts`) that:
- Loads translations
- Exports `t()` translation function
- Exports `setLocale()` and `locale` state
- Provides `formatDate()`, `formatNumber()` helpers

## Risks / Trade-offs

- **Risk:** Missing translations in one locale → fallback to the other
  - **Mitigation:** Use `i18n-js` fallback chain (zh → en for missing zh keys)
- **Risk:** Hardcoded strings from external components (Tamagui, etc.)
  - **Mitigation:** Only translate custom app strings; library strings use their defaults
