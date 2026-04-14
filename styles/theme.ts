// 主题变量 - 项目统一样式定义
export const colors = {
  // 主色
  primary: '#007AFF',
  primaryLight: '#4DA2FF',
  primaryDark: '#0055B3',

  // 辅助色
  secondary: '#5856D6',
  accent: '#FF9500',

  // 中性色
  background: '#FFFFFF',
  backgroundSecondary: '#F5F5F7',
  surface: '#FFFFFF',
  border: '#E5E5EA',

  // 文本色
  textPrimary: '#000000',
  textSecondary: '#8E8E93',
  textTertiary: '#C7C7CC',
  textInverse: '#FFFFFF',

  // 状态色
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',

  // 透明色
  overlay: 'rgba(0, 0, 0, 0.4)',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

// 间距
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// 圆角
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// 阴影
export const shadows = {
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
};

// 字体大小
export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// 导出主题对象
export const theme = {
  colors,
  spacing,
  borderRadius,
  shadows,
  fontSize,
};

export type Theme = typeof theme;
