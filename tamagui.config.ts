import { defaultConfig } from '@tamagui/config/v5';
import { animations } from '@tamagui/config/v5-css';
import { createTamagui } from 'tamagui';

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations,
  themes: {
    ...defaultConfig.themes,
    // brand: {
    // 需要完整定义 Tamagui 使用的 token
    // 参考 tamagui-config.json中的light dark配置
    // },
  },
  // 禁用系统主题跟随，强制使用 defaultTheme
  useSystemColorScheme: false,
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
