import { Platform } from 'react-native';

import { safeGoBack } from './navigation';

describe('safeGoBack', () => {
  const mockRouter = {
    back: jest.fn(),
    replace: jest.fn(),
    canGoBack: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('native platform', () => {
    beforeEach(() => {
      Platform.OS = 'ios';
    });

    it('should call router.back() when navigation state index > 0', () => {
      const navigation = { getState: () => ({ index: 1 }) };
      safeGoBack(mockRouter, navigation);
      expect(mockRouter.back).toHaveBeenCalled();
      expect(mockRouter.replace).not.toHaveBeenCalled();
    });

    it('should call router.back() when canGoBack returns true', () => {
      mockRouter.canGoBack.mockReturnValue(true);
      safeGoBack(mockRouter, { getState: () => ({ index: 0 }) });
      expect(mockRouter.back).toHaveBeenCalled();
    });

    it('should call router.replace with fallback when cannot go back', () => {
      mockRouter.canGoBack.mockReturnValue(false);
      safeGoBack(mockRouter, { getState: () => ({ index: 0 }) });
      expect(mockRouter.replace).toHaveBeenCalledWith('/');
    });

    it('should use custom fallbackPath', () => {
      mockRouter.canGoBack.mockReturnValue(false);
      safeGoBack(mockRouter, { getState: () => ({ index: 0 }) }, '/');
      expect(mockRouter.replace).toHaveBeenCalledWith('/');
    });

    it('should handle null navigation', () => {
      mockRouter.canGoBack.mockReturnValue(false);
      safeGoBack(mockRouter, null);
      expect(mockRouter.replace).toHaveBeenCalledWith('/');
    });

    it('should handle navigation without getState', () => {
      mockRouter.canGoBack.mockReturnValue(true);
      safeGoBack(mockRouter, {});
      expect(mockRouter.back).toHaveBeenCalled();
    });
  });

  describe('web platform', () => {
    const originalWindow = global.window;

    beforeEach(() => {
      Platform.OS = 'web';
    });

    afterEach(() => {
      global.window = originalWindow;
    });

    it('should call window.history.back() when history exists', () => {
      const mockBack = jest.fn();
      Object.defineProperty(global, 'window', {
        value: { history: { length: 2, back: mockBack } },
        writable: true,
        configurable: true,
      });

      safeGoBack(mockRouter);
      expect(mockBack).toHaveBeenCalled();
      expect(mockRouter.back).not.toHaveBeenCalled();
    });

    it('should call router.replace when no history', () => {
      Object.defineProperty(global, 'window', {
        value: { history: { length: 1 } },
        writable: true,
        configurable: true,
      });

      safeGoBack(mockRouter);
      expect(mockRouter.replace).toHaveBeenCalledWith('/');
    });
  });
});
