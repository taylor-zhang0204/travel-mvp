import { isValidEmail } from './index';

describe('isValidEmail', () => {
  it('should return true for valid emails', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
    expect(isValidEmail('test.name@domain.co')).toBe(true);
    expect(isValidEmail('a+b@c.org')).toBe(true);
  });

  it('should return false for invalid emails', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('no-at-sign')).toBe(false);
    expect(isValidEmail('@no-local.com')).toBe(false);
    expect(isValidEmail('no-domain@')).toBe(false);
    expect(isValidEmail('has space@example.com')).toBe(false);
    expect(isValidEmail('user@.com')).toBe(false);
  });
});
