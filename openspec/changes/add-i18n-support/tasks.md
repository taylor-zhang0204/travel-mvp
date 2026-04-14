## 1. Setup i18n Dependencies

- [x] 1.1 Install `expo-localization` and `i18n-js` packages
- [x] 1.2 Create `i18n/` directory at project root

## 2. Create Translation Files

- [x] 2.1 Create `i18n/en.json` with common UI strings in English (base language)
- [x] 2.2 Create `i18n/zh.json` with corresponding Chinese translations
- [x] 2.3 Missing zh keys fall back to en

## 3. Build i18n Module

- [x] 3.1 Create `i18n/index.ts` with i18n initialization
- [x] 3.2 Implement `t()` translation function
- [x] 3.3 Implement `setLocale()` and `locale` state
- [x] 3.4 Add `formatDate()` and `formatNumber()` helpers
- [x] 3.5 Integrate AsyncStorage for language preference persistence

## 4. Build Language Switcher Component

- [x] 4.1 Create `components/LanguageSwitcher.tsx` component
- [x] 4.2 Add locale selector UI (dropdown or buttons)
- [x] 4.3 Integrate language switcher in settings or main screen

## 5. Apply Translations Across App

- [x] 5.1 Identify all hardcoded user-facing strings
- [x] 5.2 Replace strings with `t()` calls in main screens
- [x] 5.3 Update date/number formatting to use locale-aware helpers

## 6. Testing

- [x] 6.1 Verify zh locale loads correctly
- [x] 6.2 Verify en locale loads correctly
- [x] 6.3 Verify language switch persists after restart
- [x] 6.4 Test date/number formatting for both locales
