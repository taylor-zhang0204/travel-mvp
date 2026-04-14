## Why

The app needs to support multiple languages to serve users in different regions. Adding i18n support for Chinese (zh) and English (en) enables the app to be localized without duplicating UI code.

## What Changes

- Add i18n infrastructure using expo-localization and i18n-js
- Create translation files for zh and en locales
- Build a language switcher component
- Apply translations across app screens

## Capabilities

### New Capabilities
- `i18n`: Internationalization infrastructure supporting zh and en locales with translation loading, language switching, and locale-aware formatting

## Impact

- New dependency: `expo-localization`, `i18n-js`
- Translation files: `app/i18n/zh.json`, `app/i18n/en.json`
- Language switcher component in UI
- All user-facing strings across screens need to be externalized
