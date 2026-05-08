import { transformKeysToCamel } from './interceptors';

describe('transformKeysToCamel', () => {
  it('should convert snake_case keys to camelCase', () => {
    const input = { user_name: 'John', first_name: 'Jane' };
    expect(transformKeysToCamel(input)).toEqual({ userName: 'John', firstName: 'Jane' });
  });

  it('should handle nested objects', () => {
    const input = { user_info: { first_name: 'John', last_name: 'Doe' } };
    expect(transformKeysToCamel(input)).toEqual({
      userInfo: { firstName: 'John', lastName: 'Doe' },
    });
  });

  it('should handle arrays', () => {
    const input = [{ user_name: 'A' }, { user_name: 'B' }];
    expect(transformKeysToCamel(input)).toEqual([{ userName: 'A' }, { userName: 'B' }]);
  });

  it('should handle arrays inside objects', () => {
    const input = { user_list: [{ first_name: 'A' }] };
    expect(transformKeysToCamel(input)).toEqual({ userList: [{ firstName: 'A' }] });
  });

  it('should return null/undefined as-is', () => {
    expect(transformKeysToCamel(null)).toBeNull();
    expect(transformKeysToCamel(undefined)).toBeUndefined();
  });

  it('should return primitives as-is', () => {
    expect(transformKeysToCamel(42)).toBe(42);
    expect(transformKeysToCamel('hello')).toBe('hello');
    expect(transformKeysToCamel(true)).toBe(true);
  });

  it('should not modify already camelCase keys', () => {
    const input = { userName: 'John' };
    expect(transformKeysToCamel(input)).toEqual({ userName: 'John' });
  });

  it('should handle deeply nested structures', () => {
    const input = { level_one: { level_two: { level_three: 'val' } } };
    expect(transformKeysToCamel(input)).toEqual({
      levelOne: { levelTwo: { levelThree: 'val' } },
    });
  });

  it('should handle empty object', () => {
    expect(transformKeysToCamel({})).toEqual({});
  });

  it('should handle empty array', () => {
    expect(transformKeysToCamel([])).toEqual([]);
  });
});
