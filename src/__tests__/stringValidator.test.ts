import { describe, expect, test } from 'vitest';
import { validator } from '../validator';
import {
  minLength,
  isEmpty,
  maxLength,
  rangeLength,
  isUpper,
  isLower,
  isAlpha,
  isAlphaNumeric,
  isNumeric,
  containsOneOfChars,
  containsSpecialChars,
  contains,
  containsAt,
  lengthEqual,
  isEqual,
  startsWith,
  endsWith,
  startsWithOneOf,
  startsWithOneOfChars,
  startsWithNumber,
  startsWithSpecialChar,
  startsWithLowerCase,
  startsWithUpperCase,
  surroundByOneOf,
  surroundBy,
  surroundByOneOfChars,
  surroundByOneOfPairs,
  endsWithSpecialChar,
  match,
  not,
  oneOfCharsFollowByOneOfChars,
  containsOneOfCharsCount,
  containsMaxCount,
  endsWithOneOf,
  containsOneOfCharsMaxCount,
  endsWithOneOfChars,
  containsCount,
  containsMinCount,
  containsOneOfCharsMinCount,
  containsOneOfCharsRangeCount,
  containsOneOfCount,
  containsOneOfMaxCount,
  containsOneOfMinCount,
  containsOneOfRangeCount,
  containsRangeCount,
  endsWithLowerCase,
  endsWithNumber,
  endsWithUpperCase,
  followBy,
  followByOneOf,
  leftOf,
  leftOfOneOf,
  leftOfOneOfChars,
  rightOfOneOfChars,
  rightOf,
  rightOfOneOf,
} from '../validators';

describe('FEAT: Validate a string with customs validation methods', () => {
  describe('GIVEN a string', () => {
    describe('WHEN string = "abc" and no validate function', () => {
      test('THEN it should return true', () => {
        const isValid: boolean = validator('abc', []);
        expect(isValid).toBe(true);
      });
    });
    describe('RULE : is  empty', () => {
      describe('WHEN string = "abc"', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abc', [isEmpty()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ""', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('', [isEmpty()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is not empty', () => {
      describe('WHEN string = "abc" ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abc', [not(isEmpty())]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "" ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('', [not(isEmpty())]);
          expect(isValid).toBe(false);
        });
      });
    });

    describe('RULE : Minimum length', () => {
      describe('WHEN string = abc AND the required minimum length is 5', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abc', [minLength(5)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcde AND the required minimum length is 5', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcde', [minLength(5)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Maximum length', () => {
      describe('WHEN string = abcef AND the required maximum length is 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcef', [maxLength(3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab AND the required maximum length is 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abc', [maxLength(3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : range length', () => {
      describe('WHEN string = abcefg AND the required minimum length is 3 maximum length is 5', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcefg', [rangeLength(3, 5)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND the required maximum length is 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd', [rangeLength(3, 5)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : equal length', () => {
      describe('WHEN string = abcefg AND the required equal length is 4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcefg', [lengthEqual(4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND the required equal length is 4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd', [lengthEqual(4)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is upper case', () => {
      describe('WHEN string = abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcefg', [isUpper()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = Abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('Abcefg', [isUpper()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ABCD', [isUpper()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is lower case', () => {
      describe('WHEN string = ABCDEFG ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABCDEFG', [isLower()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = Abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('Abcefg', [isLower()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd', [isLower()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab cd', [isLower()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains only Alpha', () => {
      describe('WHEN string = ab12cefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab12cefg', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab1 2cefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab1 2cefg', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$ce#fg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab$ce#fg', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 12345 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('12345', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab cd', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ABCDEF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ABCDEF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ABC DEF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ABC DEF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCDeF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCDeF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abC DeF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abC DeF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is AlphaNumeric', () => {
      describe('WHEN string = $#/( ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('$#/(', [isAlphaNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$cefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab$cefg', [isAlphaNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcde ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcde', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 12345 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('12345', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab123cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab123cd', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ABCDEF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ABCDEF', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abC125DeF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abC125DeF', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is Numeric', () => {
      describe('WHEN string = $#/( ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('$#/(', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcefg', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$cde ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab$cde', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABCDE ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABCDE', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab123cd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab123cd', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 12345 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('12345', [isNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = -12345 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('-12345', [isNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 1.234 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('1.234', [isNumeric()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains charset', () => {
      describe('WHEN string = abcd$123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd$123', [containsOneOfChars('ABCD')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsOneOfChars('ABCD')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains special chars', () => {
      describe('WHEN string = abcd123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd123', [containsSpecialChars()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsSpecialChars()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains ', () => {
      describe('WHEN string = abcd$123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd$123', [contains('cD$')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [contains('Cd$1')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsAt('Cd', 2)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains at', () => {
      describe('WHEN string = abcd$123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd$123', [containsAt('$', 5)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsAt('$', 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsAt('Cd', 2)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : equal', () => {
      describe('WHEN string = ABcde, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [isEqual('abcd')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd check = abcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [isEqual('abcd', true)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd check = aBcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd', [isEqual('aBcd', true)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [isEqual('abcd')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd, check = aBcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd', [isEqual('aBcd')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : not equal', () => {
      describe('WHEN string = ABcde, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [not(isEqual('abcd'))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd check = abcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [not(isEqual('abcd', true))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd check = aBcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd', [not(isEqual('aBcd', true))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [not(isEqual('abcd'))]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd, check = aBcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd', [not(isEqual('aBcd'))]);
          expect(isValid).toBe(false);
        });
      });
    });

    describe('RULE : starts with string', () => {
      describe('WHEN string = ABcde, AND startWith = cDe', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [startsWith('cDe')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith = 123', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [startsWith('123')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd AND startWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('#abcd', [startsWith('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith = aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [startsWith('aB')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 123abcd AND startWith = 123', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('123abcd', [startsWith('123')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = #aBcd AND startWith = #a', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('#aBcd', [startsWith('#a')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with one of strings', () => {
      describe('WHEN string = ABcde, AND startWith one of = cDe, abd, abc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [startsWithOneOf(['cDe', 'abd, abc'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of = 123, #ab, Ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [startsWithOneOf(['123', '#ab', 'Ab'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd AND startWith one of = ab, $ab, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('#abcd', [startsWithOneOf(['ab', '$ab', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of = aB, a, aBc', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [startsWithOneOf(['aB', 'a', 'aBc'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 123abcd AND startWith on of = 123, 12, 1', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('123abcd', [startsWithOneOf(['123', '12', '1'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = #aBcd AND startWith one of = #a, #A, #b', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('#aBcd', [startsWithOneOf(['#a', '#A', '#b'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with one of chars', () => {
      describe('WHEN string = ABcde, AND startWith one of chars = cDe', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [startsWithOneOfChars('cDe')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of chars = 123', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [startsWithOneOfChars('123')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd AND startWith one of chars = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('#abcd', [startsWithOneOfChars('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of chars = aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [startsWithOneOfChars('aB')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 123abcd AND startWith one of chars = 123', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('123abcd', [startsWithOneOfChars('123')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = #aBcd AND startWith one of chars = $#*+', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('#aBcd', [startsWithOneOfChars('$#*+')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with string', () => {
      describe('WHEN string = ABcde, AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [endsWith('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde, AND endWith = cde#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde#', [endsWith('cde')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = 123', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [endsWith('123')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd', [endsWith('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [endsWith('cd')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd123 AND endWith = 123', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd123', [endsWith('123')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd# AND endWith = a#', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd#', [endsWith('d#')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with one of strings', () => {
      describe('WHEN string = ABcde, AND endWith = ab, cd, ef', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [endsWithOneOf(['ab', 'cd', 'ef'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde, AND endWith = cde, de$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde#', [endsWithOneOf(['cde', 'de$'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = 123,1$2, 12b', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [endsWithOneOf(['123', '1$2', '12b'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND endWith = ab, dd, bd, db', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd', [endsWithOneOf(['ab', 'dd', 'bd', 'db'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = ad, CD, cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [endsWithOneOf(['ad', 'CD', 'cd'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd123 AND endWith = 24, 123, 12', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd123', [endsWithOneOf(['24', '123', '12'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd# AND endWith = d#, $d, ab', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd#', [endsWithOneOf(['d#', '$d', 'ab'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with one of chars', () => {
      describe('WHEN string = ABcde, AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [endsWithOneOfChars('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde, AND endWith = cde$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde#', [endsWithOneOfChars('cde$')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = 145', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd', [endsWithOneOfChars('145')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd', [endsWithOneOfChars('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = cfd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [endsWithOneOfChars('cfd')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd123 AND endWith = 2, 3, 4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd123', [endsWithOneOfChars('234')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd# AND endWith = $#*+', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd#', [endsWithOneOfChars('$#*+')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with lower case', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [startsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1aBcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('1aBcd', [startsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('#abcd', [startsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [startsWithLowerCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with upper case', () => {
      describe('WHEN string = abcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcde', [startsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1aBcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('1aBcd', [startsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('#abcd', [startsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ABcd', [startsWithUpperCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with special char', () => {
      describe('WHEN string = abcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcde', [startsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcd', [startsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('1abcd', [startsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('#ABcd', [startsWithSpecialChar()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = (ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('(ABcd', [startsWithSpecialChar()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with number', () => {
      describe('WHEN string = abcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcde', [startsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcd', [startsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('#abcd', [startsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('1ABcd', [startsWithNumber()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with lower case', () => {
      describe('WHEN string = ABcDE', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcDE', [endsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd1', [endsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd#', [endsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBcd', [endsWithLowerCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with upper case', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [endsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd1', [endsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd#', [endsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD', [endsWithUpperCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with special char', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [endsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd1', [endsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCD', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCD', [endsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBCD]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD]', [endsWithSpecialChar()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with number', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde', [endsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcd$', [endsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCD', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCD', [endsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBCD8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD8', [endsWithNumber()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : left of', () => {
      describe('WHEN string = ABc@de AND Left of = @ and search = BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABc@de', [leftOf('@', 'BC')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Left of = cd and search = aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcdeF', [leftOf('cd', 'aB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = B and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [leftOf('B', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [leftOf('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$CD', [leftOf('$', 'ab')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD8', [leftOf('CD', 'aB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : left Of One Of', () => {
      describe('WHEN string = ABc@de AND Left of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABc@de', [leftOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Left of = cd and search = aB, BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcdeF', [leftOfOneOf('cd', ['aB', 'BC'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = B and search = aBc, ha', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [leftOfOneOf('B', ['aBc', 'ha'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = gh and search = aBc, aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [leftOfOneOf('gh', ['aBc', 'aB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD  AND Left of = $ and search = ab, CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$CD', [leftOfOneOf('$', ['ab', 'CD'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8  AND Left of = CD and search = AA, aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD8', [leftOfOneOf('CD', ['AA', 'aB'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : left Of One Of char', () => {
      describe('WHEN string = ABc@de AND Left of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABc@de', [leftOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = @ABcde AND Left of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('@ABcde', [leftOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Left of = cd and search = cda1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcdeF', [leftOfOneOfChars('cd', 'cda1')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = B and search = 1Bc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [leftOfOneOfChars('B', '1Bc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [leftOfOneOfChars('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD AND Left of = $ and search = abCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$CD', [leftOfOneOfChars('$', 'abCD')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8 AND Left of = CD and search = cAaB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD8', [leftOfOneOfChars('CD', 'cAaB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : right of', () => {
      describe('WHEN string = ABc@de AND Right of = @ and search = BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABc@de', [rightOf('@', 'BC')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd@e AND Right of = @ and search = BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcd@e', [rightOf('@', 'BC')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABc@de AND Right of = @ and search = BCE', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABc@de', [rightOf('@', 'BCE')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcdeF', [rightOf('cd', 'aB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcdeF', [rightOf('cd', 'aB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = B and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [rightOf('B', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = cd and search = eFG', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [rightOf('cd', 'eFG')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [rightOf('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD AND Right of = $ and search = CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$CD', [rightOf('$', 'CD')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8 AND Right of = CD and search = 8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD8', [rightOf('CD', '8')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : right Of One Of', () => {
      describe('WHEN string = ABc@de AND Right of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABc@de', [rightOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde@ AND Right of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde@', [rightOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd@e AND Right of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcd@e', [rightOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = aB, BCG', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcdeF', [rightOfOneOf('cd', ['aB', 'BCG'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = B and search = aBc, ha', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [rightOfOneOf('B', ['aBc', 'ha'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = gh and search = aBc, aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [rightOfOneOf('gh', ['aBc', 'aB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD  AND Right of = $ and search = ab, CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$CD', [rightOfOneOf('$', ['ab', 'CD'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8  AND Right of = CD and search = AA, 8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD8', [rightOfOneOf('CD', ['AA', '8'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : right Of One Of char', () => {
      describe('WHEN string = ABc@de AND Right of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABc@de', [rightOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde@ AND Right of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcde@', [rightOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = cda1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ABcdeF', [rightOfOneOfChars('cd', 'cda1')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = B and search = 1B#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [rightOfOneOfChars('B', '1B#')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('aBcdeF', [rightOfOneOfChars('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD AND Right of = $ and search = abCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$CD', [rightOfOneOfChars('$', 'abCD')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8 AND Right of = CD and search = cA8aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('aBCD8', [rightOfOneOfChars('CD', 'cA8aB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By', () => {
      describe('WHEN string = (ABcde] AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('(ABcde]', [surroundBy('(', ')')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde) AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('[ABcde)', [surroundBy('(', ')')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde] AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('[ABcde]', [surroundBy('(', ')')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = <strong>ABcde</strong> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('<strong>ABcde</strong>', [surroundBy('<b>', '</b>')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = <strong>ABcde</b> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('<strong>ABcde</b>', [surroundBy('<b>', '</b>')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = <b>ABcde</strong> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('<b>ABcde</strong>', [surroundBy('<b>', '</b>')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = (ABcde) AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('(ABcde)', [surroundBy('(', ')')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = <b>ABcde</b> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('<b>ABcde</b>', [surroundBy('<b>', '</b>')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By One of', () => {
      describe('WHEN string = _ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('_ABcde_', [surroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('**ABcde_', [surroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = _ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('**ABcde_', [surroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('**ABcde__', [surroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = **ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('**ABcde**', [surroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = __ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('**ABcde__', [surroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = __ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('__ABcde__', [surroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By One of pairs', () => {
      describe('WHEN string = _ABcde** AND surroundBy = **,__; **,__,--', () => {
        test('THEN it should return false', () => {
          const isValidFn = () => {
            return validator('**ABcde_', [surroundByOneOfPairs(['**', '__'], ['**', '__', '--'])]);
          };
          expect(isValidFn).toThrow('Arrays startsWith and EndsWith not have same length !');
        });
      });
      describe('WHEN string = _ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('_ABcde_', [surroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('**ABcde_', [surroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = _ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('**ABcde_', [surroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('**ABcde__', [surroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = __ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('**ABcde__', [surroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('**ABcde**', [surroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });

      describe('WHEN string = __ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('__ABcde__', [surroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By One Of Chars', () => {
      describe('WHEN string = (ABcde] AND surroundBy = ([, )}', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('(ABcde]', [surroundByOneOfChars('([', ')}')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde} AND surroundBy = ({, )}', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('[ABcde}', [surroundByOneOfChars('({', ')}')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde] AND surroundBy = ({, )}', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('[ABcde]', [surroundByOneOfChars('({', ')}')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = (ABcde] AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('(ABcde]', [surroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = [ABcde) AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('[ABcde)', [surroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = [ABcde] AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('[ABcde]', [surroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = (ABcde) AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('(ABcde)', [surroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains count', () => {
      describe('WHEN string = abcd123 AND subStr = $  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd123', [containsCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd$123AB', [containsCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$Cd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab$Cd$123$AB', [containsCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdabcdef AND subStr = da  count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcdabcdabcdef', [containsCount('da', 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123$AB', [containsCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcdabcdabcdefabcda AND subStr = da  count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcdabcdabcdefabcda', [containsCount('da', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains min count', () => {
      describe('WHEN string = abcd123 AND subStr = $  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd123', [containsMinCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd$123AB', [containsMinCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdbcdef AND subStr = da  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcdabcdbcdef', [containsMinCount('da', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123$AB', [containsMinCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab$Cd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$Cd$123$AB', [containsMinCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcdabcdabcdefabcbcdaef AND subStr = da  count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcdabcdabcdefabcbcdaef', [containsMinCount('da', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains max count', () => {
      describe('WHEN string = ab$Cd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$Cd$123$AB', [containsMaxCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdabcdedafabcbcdaefda AND subStr = da  count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcdabcdabcdedafabcbcdaefda', [containsMaxCount('da', 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd123 AND subStr = $  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcd123', [containsMaxCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsMaxCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcdabcdbcdef AND subStr = da  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcdabcdbcdef', [containsMaxCount('da', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123$AB', [containsMaxCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });

      describe('RULE : contains range count', () => {
        describe('WHEN string = abCd123AB AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = validator('abCd123AB', [containsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd123AB AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = validator('ab$Cd123AB', [containsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd$12$3A$BcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = validator('ab$Cd$12$3A$BcD$ef', [containsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = abcdabcabcdeafabcbcaefd AND subStr = da  min = 2 max = 3', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = validator('abcdabcabcdeafabcbcaefd', [containsRangeCount('da', 2, 3)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = abdacdabcdabcdedafabcbcdaefd AND subStr = da  min = 2 max = 3', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = validator('abdacdabcdabcdedafabcbcdaefd', [containsRangeCount('da', 2, 3)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd123ABcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('ab$Cd123ABcD$ef', [containsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd123$ABcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('ab$Cd123$ABcD$ef', [containsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd$123$ABcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('ab$Cd$123$ABcD$ef', [containsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = abcdabcdabcdaef AND subStr = da  min = 3 max= 5', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('abcdabcdabcdaef', [containsRangeCount('da', 3, 5)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = abcdadabcdabcdadaef AND subStr = da  min = 3 max= 5', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('abcdadabcdabcdadaef', [containsRangeCount('da', 3, 5)]);
            expect(isValid).toBe(true);
          });
        });
      });
    });

    describe('RULE : contains one of count', () => {
      describe('WHEN string = abcd123 AND subStr = [$, 24]  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd123', [containsOneOfCount(['$', '24'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = [$, 23]  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd$123$AB', [containsOneOfCount(['$', '23'], 2)]);
          expect(isValid).toBe(false);
        });
      });

      describe('WHEN string = abcdabcdabcdef AND subStr = [da, ab]  count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcdabcdabcdef', [containsOneOfCount(['da', 'ab'], 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = [$, 23]  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsOneOfCount(['$', '23'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$12$3AB AND subStr = [$, 23]  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$12$3AB', [containsOneOfCount(['$', '23'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = dabcddadc AND subStr = [da, cd]   count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('dabcddadc', [containsOneOfCount(['da', 'cd'], 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains min one of count', () => {
      describe('WHEN string = abcd123 AND subStr = [$, 24] count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd123', [containsOneOfMinCount(['$', '24'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = [$, 24] count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd$123AB', [containsOneOfMinCount(['$', '24'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdbcdef AND subStr = [dab, cba] count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcdabcdbcdef', [containsOneOfMinCount(['dab', 'cba'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = [$, 23] count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123$AB', [containsOneOfMinCount(['$', '23'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = dabefgcdaghicda AND subStr = [dab, cda] count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('dabefgcdaghicda', [containsOneOfMinCount(['dab', 'cda'], 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains max one of count', () => {
      describe('WHEN string = ab$Cd$123$AB AND subStr = [$, 23] count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$Cd$123$AB', [containsOneOfMaxCount(['$', '23'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdabcdedafabcbcdaefda AND subStr = [dab, bc] count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcdabcdabcdedafabcbcdaefda', [containsOneOfMaxCount(['dab', 'bc'], 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abc$d123 AND subStr = [$, 24]  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abc$d123', [containsOneOfMaxCount(['$', '24'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab$Cd$123AB AND subStr = [$, 23]  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab$Cd$123AB', [containsOneOfMaxCount(['$', '23'], 3)]);
          expect(isValid).toBe(true);
        });
      });

      describe('RULE : contains one of range count', () => {
        describe('WHEN string = abCd123AB AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = validator('abCd123AB', [containsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd$123A$B23 AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = validator('ab$Cd$123A$B23', [containsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd123ABcD$ef AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('ab$Cd123ABcD$ef', [containsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd123ABcDef AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('ab$Cd123ABcDef', [containsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd12ABcD$ef AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = validator('ab$Cd12ABcD$ef', [containsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
      });
    });

    describe('RULE : contains one of chars count', () => {
      describe('WHEN string = abcd123 AND subStr = $#€  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd123', [containsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd$123AB', [containsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$Cd$123$AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab$Cd$123$AB', [containsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1€23AB', [containsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$1€23$AB', [containsOneOfCharsCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1#23#AB', [containsOneOfCharsCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcAbcDbcdefabcA AND subStr = DA  count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcAbcDbcdefabcA', [containsOneOfCharsCount('DA', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains one of chars min count', () => {
      describe('WHEN string = abcd123 AND subStr = $#€  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcd123', [containsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd$123AB', [containsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab&Cd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd$123AB', [containsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1€23AB', [containsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$1€23$AB', [containsOneOfCharsMinCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1#23#AB', [containsOneOfCharsMinCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains one of chars max count', () => {
      describe('WHEN string = ab$Cd$1#2€3AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab$Cd$1#2€3AB', [containsOneOfCharsMaxCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab&Cd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$123AB', [containsOneOfCharsMaxCount('$#€', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1€23AB', [containsOneOfCharsMaxCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$1€23$AB', [containsOneOfCharsMaxCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1#23#AB', [containsOneOfCharsMaxCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains one of chars range count', () => {
      describe('WHEN string = abCd123AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd123AB', [containsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd12€3AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abCd12€3AB', [containsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab#Cd$1€2#3$AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab#Cd$1€2#3$AB', [containsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1€23AB', [containsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd$1€23$AB', [containsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abCd#1#23#AB', [containsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab€Cd$1€23$AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab€Cd$1€23$AB', [containsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is Math with RegEx', () => {
      describe('WHEN string = "abcABd12"', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('abcABd12', [match(new RegExp('^[a-zA-Z]+$'))]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "1245ab"', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('1245ab', [match(new RegExp('^[0-9A-Z]+$'))]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "1245ab"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('1245ab', [match(new RegExp('^[0-9]+[a-z]+$'))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "abcABd12"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('abcABd12', [match(new RegExp('^[A-Za-z0-9]+$'))]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is one of chars is follow by one of chars', () => {
      describe('WHEN string = "ab_cA-Bd12" chars = _. followBy = @$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_cA-Bd12', [oneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_.cA$Bd12" chars = _. followBy = @$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_.cA$Bd12', [oneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_$cA.Bd12" chars = _. followBy = @$"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab_$cA.Bd12', [oneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_$cA-@Bd12" chars = _. followBy = @$"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab_$cA-@Bd12', [oneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_cA--$Bd12" chars = _. followBy = @$"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab_cA--$Bd12', [oneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : subStr is follow by another string', () => {
      describe('WHEN string = "ab_dABd12" subStr = cA followBy = AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_dABd12', [followBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_cABd12', [followBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAaBd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_cAaBd12', [followBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAA_Bd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_cAA_Bd12', [followBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab_cAABd12', [followBy('cA', 'AB')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_cAABcAABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab_cAABcAABd12', [followBy('cA', 'AB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : subStr is follow by one of chars', () => {
      describe('WHEN string = "ab_dABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_dABd12', [followByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_cABd12', [followByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAaBd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_cAaBd12', [followByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAA_Bd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = validator('ab_cAA_Bd12', [followByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab_cAABd12', [followByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_cA$Bd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = validator('ab_cA$Bd12', [followByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(true);
        });
      });
    });
  });
});
