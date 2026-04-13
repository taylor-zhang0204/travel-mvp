import { defaultConfig } from '@tamagui/config/v5';
import { createTamagui } from 'tamagui';

export const config = createTamagui(defaultConfig);

export type TamaguiConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiConfig {}
}
