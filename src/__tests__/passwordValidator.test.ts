import { describe, expect, test } from 'vitest';
import { isValidStrongPassword } from './mocks/passwordValidator';

const validPasswords = ['ABcd8#56$Kpm', 'abcD85$KPm8€', '84KLM!_brug9', 'dfm?JG537GTem$K', 'X5j13$#eCM1cG@Kdc'];

const invalidPasswords = ['abcdefgh', 'gab12cdbf', '145ghHbncdN4', 'bdBD456kdLK78', 'abcde$1Dfgh#', 'ABdef$KL?MNO', '12345gh5vbB$'];

describe('Feature : Strong Password validator', () => {
  describe('Given a list of valid password', () => {
    test.each(validPasswords)('When %p as argument, it should return TRUE', async password => {
      const isValid = await isValidStrongPassword(password);
      expect(isValid).toBe(true);
    });
  });

  describe('Given a list of invalid passwords', () => {
    test.each(invalidPasswords)('When %p as argument, it should return FALSE', async password => {
      const isValid = await isValidStrongPassword(password);
      expect(isValid).toBe(false);
    });
  });
});
