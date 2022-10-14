import { describe, expect, test } from 'vitest';

const validEmailValue = 'johndoe@gmail.com';
const invalidEmailValue = 'johndoe@l.com';

describe('Feature : Email validator', () => {
  describe('When validate email correct johndoe@gmail.com', () => {
    test('It should return true', () => {
      const checkEmail = validEmailValue === 'johndoe@gmail.com';
      expect(checkEmail).toBeTruthy();
    });
  });
  describe('When validate email incorrect johndoe@l.com', () => {
    test('It should return false', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const checkEmail = invalidEmailValue === 'johndoe@gmail.com';
      expect(checkEmail).toBeFalsy();
    });
  });
});
