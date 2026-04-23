import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { setCalendarLocale } from './calendarLocale';
import en from './en.json';
import zh from './zh.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
};

// Get device language
function getDeviceLanguage(): string {
  const locales = getLocales();
  if (locales && locales.length > 0) {
    const languageCode = locales[0].languageCode;
    // Only support 'en' and 'zh'
    if (languageCode === 'zh') {
      return 'zh';
    }
  }
  return 'en';
}

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(), // Use device language as default
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

setCalendarLocale(i18n.language);
i18n.on('languageChanged', (lng) => setCalendarLocale(lng));

export default i18n;
