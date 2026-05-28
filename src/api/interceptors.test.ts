import { transformKeysToCamel, transformKeysToSnake } from './interceptors';

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

describe('transformKeysToSnake', () => {
  it('should convert camelCase keys to snake_case', () => {
    const input = { userName: 'John', firstName: 'Jane' };
    expect(transformKeysToSnake(input)).toEqual({ user_name: 'John', first_name: 'Jane' });
  });

  it('should handle nested objects', () => {
    const input = { userInfo: { firstName: 'John', lastName: 'Doe' } };
    expect(transformKeysToSnake(input)).toEqual({
      user_info: { first_name: 'John', last_name: 'Doe' },
    });
  });

  it('should handle arrays', () => {
    const input = [{ userName: 'A' }, { userName: 'B' }];
    expect(transformKeysToSnake(input)).toEqual([{ user_name: 'A' }, { user_name: 'B' }]);
  });

  it('should handle arrays inside objects', () => {
    const input = { userList: [{ firstName: 'A' }] };
    expect(transformKeysToSnake(input)).toEqual({ user_list: [{ first_name: 'A' }] });
  });

  it('should return null/undefined as-is', () => {
    expect(transformKeysToSnake(null)).toBeNull();
    expect(transformKeysToSnake(undefined)).toBeUndefined();
  });

  it('should return primitives as-is', () => {
    expect(transformKeysToSnake(42)).toBe(42);
    expect(transformKeysToSnake('hello')).toBe('hello');
    expect(transformKeysToSnake(true)).toBe(true);
  });

  it('should not modify already snake_case keys', () => {
    const input = { user_name: 'John' };
    expect(transformKeysToSnake(input)).toEqual({ user_name: 'John' });
  });

  it('should handle deeply nested structures', () => {
    const input = { levelOne: { levelTwo: { levelThree: 'val' } } };
    expect(transformKeysToSnake(input)).toEqual({
      level_one: { level_two: { level_three: 'val' } },
    });
  });

  it('should handle empty object', () => {
    expect(transformKeysToSnake({})).toEqual({});
  });

  it('should handle empty array', () => {
    expect(transformKeysToSnake([])).toEqual([]);
  });

  it('should handle SearchParams-like objects', () => {
    const input = {
      destination: 'Tokyo',
      checkIn: '2026-05-20',
      checkOut: '2026-05-25',
      rooms: 2,
      guests: 4,
    };
    expect(transformKeysToSnake(input)).toEqual({
      destination: 'Tokyo',
      check_in: '2026-05-20',
      check_out: '2026-05-25',
      rooms: 2,
      guests: 4,
    });
  });
});
