import { CHAR_SPACE, CHAR_TAB, CHARSET_ACCENTED, CHARSET_CRLF, CHARSET_NUMBER, stringValidator } from './stringValidator';
import { isEmpty } from './validators/string.validator.isEmpty';
import { isNot } from './validators/string.validator.isNot';
import { isRangeLength } from './validators/string.validator.isRangeLength';
import { isLower } from './validators/string.validator.isLower';
import { isContainsCount } from './validators/string.validator.isContainsCount';
import { isStartsWithOneOfChars } from './validators/string.validator.isStartsWithOneOfChars';
import { isEndsWithOneOfChars } from './validators/string.validator.isEndsWithOneOfChars';
import path from 'path';
import { readFile } from 'fs/promises';
import { isMinLength } from './validators/string.validator.isMinLength';
import { isContainsRangeCount } from './validators/string.validator.isContainsRangeCount';
import { isContainsOneOf } from './validators/string.validator.isContainsOneOf';
import { isContainsOneOfCharsMaxCount } from './validators/string.validator.isContainsOneOfCharsMaxCount';
import { isContainsOneOfChars } from './validators/string.validator.isContainsOneOfChars';
import { isNumeric } from './validators/string.validator.isNumeric';
import { isOneOfCharsFollowByOneOfChars } from './validators/string.validator.isOneOfCharsFollowByOneOfChars';
import { isEndsWithOneOf } from './validators/string.validator.isEndsWithOneOf';
import { strLeftOf, strRemoveLineBreaks, strRightOf } from './utils/stringHelpers';
import { isMatch } from './validators/string.validator.isMatch';
import { isMaxLength } from './validators/string.validator.isMaxLength';
import fs from 'fs';

const importCSVDomainBlackListToArray = async (filename: string): Promise<string[]> => {
  const result: string[] = [];
  const csvFilePath = path.resolve(__dirname, filename);
  try {
    fs.accessSync(csvFilePath);
    const data = await readFile(csvFilePath, { encoding: 'utf8' });
    const lines = data.split('\r\n');

    for (const line of lines) {
      const datas: string[] = line.split(',');
      for (const domain of datas) {
        if (domain !== '') {
          result.push(strRemoveLineBreaks(domain.trim()));
        }
      }
    }
    return Promise.resolve(result);
  } catch (e) {
    return Promise.resolve(result);
  }
};

export const isValidEmail = async (email: string, blacklistCSVFilename = 'email_disposable.csv'): Promise<boolean> => {
  email = email.trim();
  const globalCheck: boolean = stringValidator(email, [
    isNot(isEmpty()),
    isRangeLength(9, 64),
    isLower(),
    isContainsCount('@', 1),
    isNot(isContainsOneOfChars('()[]~&#/*+=°\\\'`<>^¨$€£%µ|{}!?,;:"”')),
    isNot(isContainsOneOfChars(CHARSET_ACCENTED + CHAR_SPACE + CHARSET_CRLF + CHAR_TAB)),
    isNot(isStartsWithOneOfChars(CHARSET_NUMBER + '-_.@')),
    isNot(isEndsWithOneOfChars('-_.@')),
    isNot(isOneOfCharsFollowByOneOfChars('-_.@', '-_.@')),
    isNot(isMatch(/(?=\p{Emoji})(?!\p{Number})/u)),
    isNot(isMatch(/\p{Diacritic}/gu)),
    // eslint-disable-next-line no-control-regex
    isNot(isMatch(/[^\u0000-\u00ff]/gu)),
  ]);

  if (!globalCheck) {
    return false;
  }

  const identity = strLeftOf(email, '@');
  const identityCheck = stringValidator(identity, [isMinLength(3)]);

  if (!identityCheck) {
    return false;
  }
  let blacklist: string[] = [];
  const domain = strRightOf(email, '@');

  let domainCheck = stringValidator(domain, [
    isMinLength(5),
    isMaxLength(55),
    isNot(isStartsWithOneOfChars('-_.')),
    isNot(isEndsWithOneOfChars(CHARSET_NUMBER)),
    isContainsRangeCount('.', 1, 4),
    isContainsOneOfCharsMaxCount('-_', 4),
    isNot(isContainsOneOf(blacklist)),
    isNot(
      isEndsWithOneOf([
        '.js.org',
        '.tk',
        '.ml',
        '.ga',
        '.gq',
        '.cf',
        '.eu.org',
        '.js-cool',
        '.pp.ua',
        '.thedev.id',
        '.is-a.dev',
        '.is-a.good.dev',
        '.cluster.ws',
        '.wip.la',
        '.web',
        '.xyz',
      ]),
    ),
  ]);

  if (blacklistCSVFilename !== '') {
    blacklist = await importCSVDomainBlackListToArray(blacklistCSVFilename);
    if (blacklist.length > 0) {
      domainCheck = domainCheck && stringValidator(domain, [isNot(isContainsOneOf(blacklist))]);
    }
  }

  if (!domainCheck) {
    return false;
  }

  const domainRight = domain.slice(domain.lastIndexOf('.') + 1, domain.length);
  const domainRightCheck = stringValidator(domainRight, [isRangeLength(2, 4), isNot(isNumeric()), isNot(isContainsOneOfChars('_-'))]);

  if (!domainRightCheck) {
    return false;
  }

  const domainShort = strLeftOf(domain, domainRight);
  return stringValidator(domainShort, [isMinLength(4)]);
};
