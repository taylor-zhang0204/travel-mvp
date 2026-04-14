import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import en from './en.json';
import zh from './zh.json';

export type Locale = 'en' | 'zh';

const LOCALE_STORAGE_KEY = '@i18n_locale';

// Create i18n instance with translations
const i18n = new I18n(
  {
    en,
    zh,
  },
  {
    enableFallback: true,
    defaultLocale: 'en',
  }
);

// Get device locale and determine initial locale
function getDeviceLocale(): Locale {
  const locales = getLocales();
  if (locales && locales.length > 0) {
    const languageCode = locales[0].languageCode;
    if (languageCode === 'zh') {
      return 'zh';
    }
  }
  return 'en';
}

// Singleton state
let currentLocale: Locale = 'en';
const subscribers = new Set<(locale: Locale) => void>();

// Initialize locale from storage (call this once at app start)
export async function initI18n(): Promise<void> {
  const deviceLocale = getDeviceLocale();

  try {
    const stored = await AsyncStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') {
      currentLocale = stored;
    } else {
      currentLocale = deviceLocale;
    }
  } catch {
    currentLocale = deviceLocale;
  }
  i18n.locale = currentLocale;
}

// Get current locale
export function getLocale(): Locale {
  return currentLocale;
}

// Set locale and persist
export async function setLocale(locale: Locale): Promise<void> {
  currentLocale = locale;
  i18n.locale = locale;
  try {
    await AsyncStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore storage errors
  }
  subscribers.forEach((callback) => callback(locale));
}

// Subscribe to locale changes
function subscribeLocale(callback: (locale: Locale) => void): () => void {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}

// Locale-aware date formatting
// export function formatDate(date: Date | string | number): string {
//   const d = typeof date === 'string' || date === 'number' ? new Date(date) : date;
//   if (currentLocale === 'zh') {
//     const year = d.getFullYear();
//     const month = d.getMonth() + 1;
//     const day = d.getDate();
//     return `${year}年${month}月${day}日`;
//   }
//   return d.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//   });
// }

// Locale-aware number formatting
export function formatNumber(num: number): string {
  if (currentLocale === 'zh') {
    return num.toLocaleString('zh-CN');
  }
  return num.toLocaleString('en-US');
}

// I18n Context
interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => Promise<void>;
  t: (key: string, options?: object) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

// Provider component
export function I18nProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    initI18n().then(() => {
      setLocaleState(currentLocale);
    });

    return subscribeLocale((newLocale) => {
      setLocaleState(newLocale);
    });
  }, []);

  const handleSetLocale = useCallback(async (locale: Locale) => {
    await setLocale(locale);
  }, []);

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale: handleSetLocale,
      t: (key: string, options?: object) => i18n.t(key, options),
    }),
    [locale, handleSetLocale]
  );

  // Force children to re-render when locale changes by using key
  return (
    <I18nContext.Provider value={contextValue} key={locale}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook to use i18n
export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

// Legacy hook for compatibility
export function useLocale(): [Locale, (locale: Locale) => Promise<void>] {
  const { locale, setLocale } = useI18n();
  return [locale, setLocale];
}
