import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(), // Use device language as default
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
