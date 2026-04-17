import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';

import '@/i18n';

import { tamaguiConfig } from '../tamagui.config';

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9FD' }} edges={['top']}>
        <Stack
          screenOptions={{
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </SafeAreaView>
    </TamaguiProvider>
  );
};

export default RootLayout;
