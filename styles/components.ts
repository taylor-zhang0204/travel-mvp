import { StyleSheet } from 'react-native';

import { borderRadius, colors, shadows, spacing } from './theme';

// 页面容器
export const containerStyles = StyleSheet.create({
  // 全屏容器
  fullScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // 安全区域容器
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // 居中内容容器
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  // 页面内容容器（顶部有导航栏）
  pageContent: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // 水平填充容器
  horizontalFill: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // 垂直填充容器
  verticalFill: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

// 卡片样式
export const cardStyles = StyleSheet.create({
  // 默认卡片
  default: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.sm,
  },

  // 带边框卡片
  bordered: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },

  // 悬浮卡片
  elevated: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.md,
  },
});

// 按钮样式
export const buttonStyles = StyleSheet.create({
  // 主按钮
  primary: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 次按钮
  secondary: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 轮廓按钮
  outline: {
    backgroundColor: 'transparent',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 文字按钮
  text: {
    backgroundColor: 'transparent',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// 输入框样式
export const inputStyles = StyleSheet.create({
  // 默认输入框
  default: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    fontSize: 16,
    color: colors.textPrimary,
  },

  // 带边框输入框
  bordered: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    fontSize: 16,
    color: colors.textPrimary,
  },

  // 错误状态输入框
  error: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.error,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    fontSize: 16,
    color: colors.textPrimary,
  },
});

// 分割线
export const dividerStyles = StyleSheet.create({
  // 水平分割线
  horizontal: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },

  // 垂直分割线
  vertical: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.md,
  },
});

// 文本样式
export const textStyles = StyleSheet.create({
  // 标题
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },

  // 副标题
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  // 正文
  body: {
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 24,
  },

  // 次要文本
  secondary: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  // 辅助文本
  caption: {
    fontSize: 12,
    color: colors.textTertiary,
  },
});
