import { defaultConfig } from '@tamagui/config/v5';
import { animations } from '@tamagui/config/v5-css';
import { createTamagui } from 'tamagui';

import { palette } from './styles/palette';

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations,
  themes: {
    ...defaultConfig.themes,
    kody: {
      ...defaultConfig.themes.light,
      accentBackground: palette.brandSoft,
      accentColor: palette.brand,
      background: palette.pageBackground,
      backgroundHover: '#FFFFFF',
      backgroundPress: palette.fieldBackground,
      backgroundFocus: palette.fieldBackground,
      borderColor: '#CDD7E4',
      borderColorHover: '#E5E7EB',
      borderColorFocus: palette.brand,
      borderColorPress: '#B8C7DA',
      color: '#101828',
      colorHover: '#101828',
      colorPress: '#101828',
      colorFocus: '#364153',
      placeholderColor: '#99A1AF',
      color1: '#FFFFFF',
      color2: palette.pageBackground,
      color3: palette.fieldBackground,
      color4: '#E5E7EB',
      color5: '#CDD7E4',
      color6: '#B0B1B3',
      color7: '#99A1AF',
      color8: '#56708B',
      color9: '#4A5565',
      color10: '#364153',
      color11: palette.brandText,
      color12: '#101828',
      blue9: palette.brand,
      blue10: palette.brandHover,
      blue11: palette.brandPress,
    },
  },
  // 禁用系统主题跟随，强制使用 defaultTheme
  useSystemColorScheme: false,
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
