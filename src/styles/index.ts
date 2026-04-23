// 导出所有样式
export * from './theme';
export * from './components';

// 便捷的页面布局样式（用于快速创建页面）
export const pageLayout = {
  // 页面整体布局
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // 带内边距的页面内容
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  // 带底部安全的页面内容
  contentWithBottom: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  // 水平布局
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // 水平两端布局
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // 水平居中布局
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
