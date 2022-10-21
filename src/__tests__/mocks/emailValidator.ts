import { CHAR_SPACE, CHAR_TAB, CHARSET_ACCENTED, CHARSET_CRLF, CHARSET_NUMBER, validator } from '../../validator';
import { isEmpty } from '../../validators/string.validator.isEmpty';
import { not } from '../../validators/string.validator.not';
import { rangeLength } from '../../validators/string.validator.rangeLength';
import { isLower } from '../../validators/string.validator.isLower';
import { containsCount } from '../../validators/string.validator.containsCount';
import { startsWithOneOfChars } from '../../validators/string.validator.startsWithOneOfChars';
import { endsWithOneOfChars } from '../../validators/string.validator.endsWithOneOfChars';
import path from 'path';
import { readFile } from 'fs/promises';
import { minLength } from '../../validators/string.validator.minLength';
import { containsRangeCount } from '../../validators/string.validator.containsRangeCount';
import { containsOneOf } from '../../validators/string.validator.containsOneOf';
import { containsOneOfCharsMaxCount } from '../../validators/string.validator.containsOneOfCharsMaxCount';
import { containsOneOfChars } from '../../validators/string.validator.containsOneOfChars';
import { isNumeric } from '../../validators/string.validator.isNumeric';
import { oneOfCharsFollowByOneOfChars } from '../../validators/string.validator.oneOfCharsFollowByOneOfChars';
import { endsWithOneOf } from '../../validators/string.validator.endsWithOneOf';
import { strLeftOf, strRemoveLineBreaks, strRightOf } from '../../utils/stringHelpers';
import { match } from '../../validators/string.validator.match';
import { maxLength } from '../../validators/string.validator.maxLength';
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
  const globalCheck: boolean = validator(email, [
    not(isEmpty()),
    rangeLength(9, 64),
    isLower(),
    containsCount('@', 1),
    not(containsOneOfChars('()[]~&#/*=°\\\'`<>^¨$€£%µ|{}!?,;:"”')),
    not(containsOneOfChars(CHARSET_ACCENTED + CHAR_SPACE + CHARSET_CRLF + CHAR_TAB)),
    not(startsWithOneOfChars(CHARSET_NUMBER + '-_.@+')),
    not(endsWithOneOfChars('-_.@+')),
    not(oneOfCharsFollowByOneOfChars('-_.@+', '-_.@+')),
    not(match(/(?=\p{Emoji})(?!\p{Number})/u)),
    not(match(/\p{Diacritic}/gu)),
    // eslint-disable-next-line no-control-regex
    not(match(/[^\u0000-\u00ff]/gu)),
  ]);

  if (!globalCheck) {
    return false;
  }

  const identity = strLeftOf(email, '@');
  const identityCheck = validator(identity, [minLength(3)]);

  if (!identityCheck) {
    return false;
  }
  let blacklist: string[] = [];
  const domain = strRightOf(email, '@');

  let domainCheck = validator(domain, [
    minLength(5),
    maxLength(55),
    not(startsWithOneOfChars('-_.')),
    not(endsWithOneOfChars(CHARSET_NUMBER)),
    containsRangeCount('.', 1, 4),
    containsOneOfCharsMaxCount('-_', 4),
    not(containsOneOf(blacklist)),
    not(
      endsWithOneOf([
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
      domainCheck = domainCheck && validator(domain, [not(containsOneOf(blacklist))]);
    }
  }

  if (!domainCheck) {
    return false;
  }

  const domainRight = domain.slice(domain.lastIndexOf('.') + 1, domain.length);
  const domainRightCheck = validator(domainRight, [rangeLength(2, 4), not(isNumeric()), not(containsOneOfChars('_-'))]);

  if (!domainRightCheck) {
    return false;
  }

  const domainShort = strLeftOf(domain, domainRight);
  return validator(domainShort, [minLength(4)]);
};
