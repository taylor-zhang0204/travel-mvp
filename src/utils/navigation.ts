import type { Router } from 'expo-router';
import { Platform } from 'react-native';

type MaybeNavigation =
  | {
      getState?: () =>
        | {
            index: number;
          }
        | undefined;
    }
  | null
  | undefined;

export const safeGoBack = (
  router: Pick<Router, 'back' | 'replace' | 'canGoBack'>,
  navigation?: MaybeNavigation,
  fallbackPath: Parameters<Router['replace']>[0] = '/'
) => {
  if (Platform.OS === 'web') {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
      return;
    }

    router.replace(fallbackPath);
    return;
  }

  const state = navigation?.getState?.();
  if (state && state.index > 0) {
    router.back();
    return;
  }

  if (router.canGoBack()) {
    router.back();
    return;
  }

  router.replace(fallbackPath);
};
