import AsyncStorage from '@react-native-async-storage/async-storage';

import Storage from './storage';

describe('Storage', () => {
  beforeEach(() => {
    (AsyncStorage.clear as jest.Mock).mockClear();
    (AsyncStorage.getItem as jest.Mock).mockClear();
    (AsyncStorage.setItem as jest.Mock).mockClear();
    (AsyncStorage.removeItem as jest.Mock).mockClear();
  });

  describe('get', () => {
    it('should return parsed value when key exists', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify({ foo: 'bar' }));
      const result = await Storage.get<{ foo: string }>('test-key');
      expect(result).toEqual({ foo: 'bar' });
      expect(AsyncStorage.getItem).toHaveBeenCalledWith('test-key');
    });

    it('should return null when key does not exist', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
      const result = await Storage.get('missing-key');
      expect(result).toBeNull();
    });

    it('should return null on parse error', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue('invalid json{{{');
      const result = await Storage.get('bad-key');
      expect(result).toBeNull();
    });

    it('should return null when AsyncStorage throws', async () => {
      (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error('fail'));
      const result = await Storage.get('err-key');
      expect(result).toBeNull();
    });

    it('should handle primitive values', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(42));
      expect(await Storage.get<number>('num')).toBe(42);

      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(true));
      expect(await Storage.get<boolean>('bool')).toBe(true);

      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify('hello'));
      expect(await Storage.get<string>('str')).toBe('hello');
    });
  });

  describe('set', () => {
    it('should serialize and store value', async () => {
      await Storage.set('key', { a: 1 });
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('key', JSON.stringify({ a: 1 }));
    });

    it('should handle null value', async () => {
      await Storage.set('key', null);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('key', 'null');
    });

    it('should not throw on error', async () => {
      (AsyncStorage.setItem as jest.Mock).mockRejectedValue(new Error('fail'));
      const spy = jest.spyOn(console, 'error').mockImplementation();
      await expect(Storage.set('key', 'val')).resolves.toBeUndefined();
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe('remove', () => {
    it('should remove key from storage', async () => {
      await Storage.remove('key');
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('key');
    });

    it('should not throw on error', async () => {
      (AsyncStorage.removeItem as jest.Mock).mockRejectedValue(new Error('fail'));
      const spy = jest.spyOn(console, 'error').mockImplementation();
      await expect(Storage.remove('key')).resolves.toBeUndefined();
      spy.mockRestore();
    });
  });

  describe('clear', () => {
    it('should clear all storage', async () => {
      await Storage.clear();
      expect(AsyncStorage.clear).toHaveBeenCalled();
    });

    it('should not throw on error', async () => {
      (AsyncStorage.clear as jest.Mock).mockRejectedValue(new Error('fail'));
      const spy = jest.spyOn(console, 'error').mockImplementation();
      await expect(Storage.clear()).resolves.toBeUndefined();
      spy.mockRestore();
    });
  });
});
