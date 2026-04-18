import { ErrorToast, SuccessToast } from '@/components/ui/Toast';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
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
      <Toast
        config={{
          success: ({ text1 }) => <SuccessToast text1={text1 || ''} />,
          error: ({ text1 }) => <ErrorToast text1={text1 || ''} />,
        }}
        visibilityTime={1000}
        position="bottom"
      />
    </TamaguiProvider>
  );
};

export default RootLayout;
