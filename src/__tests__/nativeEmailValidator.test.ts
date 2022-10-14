import { describe, expect, test } from 'vitest';
import { isValidEmail } from '../emailValidator';

const validEmails = [
  'johndoe@mail.com',
  'john.doe@mail.com',
  'john-doe@mail.com',
  'john_doe@mail.com',
  'john123doe@mail.com',
  'john123.doe@mail.com',
  'johndoe456@mail.com',
  'john-d@mail.com',
  'john@test.domain.com',
  'email@example-one.com',
  'email@sub-example.web_one.com',
  'email@example.co.jp',
  'test@sub.sub.test.co.uk',
  'test@sub.test.domain.com',
  'com@abc.co',
];

const invalidEmails = [
  'abc-@mail.com',
  'abc..def@mail.com',
  '.abc@mail.com',
  'ac@mail.com',
  'c@mail.com',
  '_abc@mail.com',
  'abc#def@mail.com',
  'test@test.domain.c',
  '123abc-d@mail.com',
  '123abc-_d@mail.com',
  '123abc-.d@mail.com',
  'ABc@mail.com',
  'testloremipsumdolorsitametconsecteturadipiscingelitseddo@domain.com',
  'test@300.1.1.1',
  'test@1.256.1.1',
  'test@1.127.268.1',
  'test@1.127.1.485',
  'test@127.1.1.1',
  'test@192.168.1.1',
  'test@127.1.158.3',
  'test@192.168.192.4',
  'email.net',
  'test@test.domain',
  'test@io',
  'test@@test.domain',
  'firstname+lastname@example.com',
  'email@[123.123.123.123]',
  '_______@example.com',
  '"email"@example.com',
  'much.”more\\ unusual”@example.com',
  'very.unusual.”@”.unusual.com@example.com',
  'very.”(),:;<>[]”.VERY.”very@\\\\ "very”.unusual@strange.example.com',
  'plainaddress',
  '@example.com',
  'Joe Smith <email@example.com>',
  'あいうえお@example.com',
  'email@-example.com',
  'email@.example.com',
  'email@example.web',
  'email@example.123',
  'email@yopmail.net',
  'email@spam_yopmail.xyz',
  'email@spam-tempinbox.co.uk',
  'this\\ is"really"not\\allowed@example.com',
  'email@♾example.com',
  'email-as_😱@example.com',
  'emoji😘email@example.com',
  'spaces may be quoted@example.com',
  'test@abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabc.com',
  'test@iana-.com',
  'com@ac.co',
  'com@ac.com',
];

describe('Feature : Email validator', () => {
  describe('Given a list of valid emails', () => {
    test.each(validEmails)('When %p as argument, it should return TRUE', async email => {
      const isValid = await isValidEmail(email, '../files/email_disposable.csv');
      expect(isValid).toBe(true);
    });
  });

  describe('Given a list of invalid emails', () => {
    test.each(invalidEmails)('When %p as argument, it should return FALSE', async email => {
      const isValid = await isValidEmail(email, '../files/email_disposable.csv');
      expect(isValid).toBe(false);
    });
  });
});
