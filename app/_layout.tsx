import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { TamaguiProvider } from 'tamagui';

import { ErrorToast, SuccessToast } from '@/src/components/ui/Toast';

import '@/src/i18n';

import { tamaguiConfig } from '../tamagui.config';

// Block scroll when keyboard opens on web
const useWebKeyboardFix = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') return;

    let scrollLocked = false;

    const lockScroll = () => {
      if (scrollLocked) return;
      scrollLocked = true;
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
    };

    const unlockScroll = () => {
      if (!scrollLocked) return;
      scrollLocked = false;
      document.documentElement.style.overflow = '';
      document.documentElement.style.overscrollBehavior = '';
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      window.scrollTo(0, 0);
    };

    const isFormElement = (target: EventTarget | null) => {
      const tag = (target as HTMLElement | null)?.tagName;
      return tag === 'INPUT' || tag === 'TEXTAREA';
    };

    const onFocusIn = (e: FocusEvent) => {
      if (isFormElement(e.target)) {
        lockScroll();
      }
    };

    const onFocusOut = (e: FocusEvent) => {
      if (isFormElement(e.target)) {
        setTimeout(unlockScroll, 300);
      }
    };

    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);

    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
      unlockScroll();
    };
  }, []);
};

const RootLayout = () => {
  useWebKeyboardFix();

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9FD' }} edges={['top']}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Stack
            screenOptions={{
              headerTransparent: true,
              headerShown: false,
            }}
          />
        </KeyboardAvoidingView>
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
