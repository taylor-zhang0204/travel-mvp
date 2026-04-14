## ADDED Requirements

### Requirement: i18n module initialization
The system SHALL initialize an i18n module that loads translations for zh and en locales and provides a `t()` function for translating strings.

#### Scenario: App starts with device locale zh
- **WHEN** device locale is set to Chinese
- **THEN** app initializes with zh translations loaded

#### Scenario: App starts with device locale en
- **WHEN** device locale is set to English
- **THEN** app initializes with en translations loaded

#### Scenario: App starts with unsupported locale
- **WHEN** device locale is not zh or en
- **THEN** app initializes with en translations as default

### Requirement: Translation function
The system SHALL provide a `t(key)` function that returns the translated string for the current locale.

#### Scenario: Translate existing key
- **WHEN** `t("common.submit")` is called with locale zh
- **THEN** it returns the Chinese string for "Submit"

#### Scenario: Missing translation key
- **WHEN** `t("nonexistent.key")` is called
- **THEN** it returns the key path itself as fallback

### Requirement: Language switching
The system SHALL allow switching the current locale and persist the preference across app restarts.

#### Scenario: User switches to zh
- **WHEN** user selects Chinese language
- **THEN** all subsequent `t()` calls return Chinese strings

#### Scenario: User switches to en
- **WHEN** user selects English language
- **THEN** all subsequent `t()` calls return English strings

#### Scenario: Language preference persists
- **WHEN** user switches to zh and restarts the app
- **THEN** app initializes with zh locale

### Requirement: Locale-aware formatting
The system SHALL provide `formatDate()` and `formatNumber()` helpers that respect the current locale.

#### Scenario: Format date for zh locale
- **WHEN** `formatDate(date)` is called with locale zh
- **THEN** it returns a date string formatted per Chinese conventions

#### Scenario: Format number for en locale
- **WHEN** `formatNumber(1234.56)` is called with locale en
- **THEN** it returns "1,234.56"
