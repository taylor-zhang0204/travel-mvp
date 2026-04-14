import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { initI18n, I18nProvider } from '@/i18n';

import { tamaguiConfig } from '../tamagui.config';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Initialize i18n on app start
  useEffect(() => {
    initI18n();
  }, []);

  return (
    <I18nProvider>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => <LanguageSwitcher />,
          }}
        />
      </TamaguiProvider>
    </I18nProvider>
  );
}
