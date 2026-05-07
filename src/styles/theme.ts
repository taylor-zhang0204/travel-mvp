// 主题变量 - 项目统一样式定义
export const colors = {
  // 主色（品牌蓝）
  primary: '#1566D1',
  primaryLight: '#EBF4FF',
  primaryLightBg: '#E8F3FF',
  primaryDark: '#003064',

  // 中性色 / 背景
  white: '#FFFFFF',
  backgroundPage: '#F7F9FD',
  backgroundInput: '#F5F7FA',

  // 边框
  border: '#E5E7EB',
  borderLight: '#CDD7E4',
  borderInput: '#ECEFF2',
  borderInputFocus: '#B0B1B3',
  borderSearch: '#56708B',
  borderDivider: '#D1D5DC',

  // 文本色
  textPrimary: '#101828',
  textSecondary: '#4A5565',
  textTertiary: '#56708B',
  textMuted: '#77889B',
  textHint: '#747D8B',
  textDark: '#364153',
  textWhite: '#FFFFFF',
  textBlack: '#000000',
  textBody: '#0A0A0A',
  textSubtle: '#505050',
  textPlaceholder: '#9CA3AF',
  textSearchHint: '#99A1AF',

  // 状态色
  success: '#34C759',
  warning: '#FF9500',
  error: '#DC2626',
  info: '#1566D1',

  // 按钮
  buttonDisabled: '#CBD5E1',
  buttonDisabledDark: '#9CA3AF',

  // 评分
  starFilled: '#F59E0B',
  starEmpty: '#D1D5DB',

  // 步骤/Badge
  stepActive: '#D1DFF0',
  stepInactive: '#E5E7EB',
  stepText: '#4A4F55',

  // 日历
  calendarDisabled: '#D9E1E8',
  calendarText: '#2D4150',

  // Toast
  toastSuccess: '#101828',
  toastError: '#DC2626',

  // 阴影/透明
  overlay: 'rgba(0, 0, 0, 0.4)',
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowCard: 'rgba(16, 49, 96, 0.1)',
  badgeOverlay: 'rgba(255, 255, 255, 0.6)',

  // ExclusiveOffer 比价列表
  providerBorder: '#E1E7F3',
  providerIcon: '#CDD7E4',
} as const;

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
