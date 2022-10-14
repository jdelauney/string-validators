import { describe, expect, test } from 'vitest';
import { stringValidator } from '../stringValidator';
import { isMinLength } from '../validators/string.validator.isMinLength';
import { isEmpty } from '../validators/string.validator.isEmpty';
import { isMaxLength } from '../validators/string.validator.isMaxLength';
import { isRangeLength } from '../validators/string.validator.isRangeLength';
import { isUpper } from '../validators/string.validator.isUpper';
import { isLower } from '../validators/string.validator.isLower';
import { isAlpha } from '../validators/string.validator.isAlpha';
import { isAlphaNumeric } from '../validators/string.validator.isAlphaNumeric';
import { isNumeric } from '../validators/string.validator.isNumeric';
import { isContainsOneOfChars } from '../validators/string.validator.isContainsOneOfChars';
import { isContainsSpecialChars } from '../validators/string.validator.isContainsSpecialChars';
import { isContains } from '../validators/string.validator.isContains';
import { isContainsAt } from '../validators/string.validator.isContainsAt';
import { isLengthEqual } from '../validators/string.validator.isLengthEqual';
import { isEqual } from '../validators/string.validator.isEqual';
import { isStartsWith } from '../validators/string.validator.isStartsWith';
import { isEndsWith } from '../validators/string.validator.isEndsWith';
import { isStartsWithOneOfChars } from '../validators/string.validator.isStartsWithOneOfChars';
import { isStartsWithOneOf } from '../validators/string.validator.isStartsWithOneOf';
import { isEndsWithOneOf } from '../validators/string.validator.isEndsWithOneOf';
import { isEndsWithOneOfChars } from '../validators/string.validator.isEndsWithOneOfChars';
import { isStartsWithLowerCase } from '../validators/string.validator.isStartsWithLowerCase';
import { isStartsWithUpperCase } from '../validators/string.validator.isStartsWithUpperCase';
import { isStartsWithSpecialChar } from '../validators/string.validator.isStartsWithSpecialChar';
import { isStartsWithNumber } from '../validators/string.validator.isStartsWithNumber';
import { isEndsWithNumber } from '../validators/string.validator.isEndsWithNumber';
import { isEndsWithSpecialChar } from '../validators/string.validator.isEndsWithSpecialChar';
import { isEndsWithUpperCase } from '../validators/string.validator.isEndsWithUpperCase';
import { isEndsWithLowerCase } from '../validators/string.validator.isEndsWithLowerCase';
import { isLeftOf } from '../validators/string.validator.isLeftOf';
import { isLeftOfOneOf } from '../validators/string.validator.isLeftOfOneOf';
import { isLeftOfOneOfChars } from '../validators/string.validator.isLeftOfOneOfChars';
import { isRightOf } from '../validators/string.validator.isRightOf';
import { isRightOfOneOf } from '../validators/string.validator.isRightOfOneOf';
import { isRightOfOneOfChars } from '../validators/string.validator.isRightOfOneOfChars';
import { isSurroundBy } from '../validators/string.validator.isSurroundBy';
import { isSurroundByOneOf } from '../validators/string.validator.isSurroundByOneOf';
import { isSurroundByOneOfChars } from '../validators/string.validator.isSurroundByOneOfChars';
import { isSurroundByOneOfPairs } from '../validators/string.validator.isSurroundByOneOfPairs';
import { isNot } from '../validators/string.validator.isNot';
import { isContainsCount } from '../validators/string.validator.isContainsCount';
import { isContainsMaxCount } from '../validators/string.validator.isContainsMaxCount';
import { isContainsRangeCount } from '../validators/string.validator.isContainsRangeCount';
import { isContainsMinCount } from '../validators/string.validator.isContainsMinCount';
import { isContainsOneOfCount } from '../validators/string.validator.isContainsOneOfCount';
import { isContainsOneOfMinCount } from '../validators/string.validator.isContainsOneOfMinCount';
import { isContainsOneOfMaxCount } from '../validators/string.validator.isContainsOneOfMaxCount';
import { isContainsOneOfRangeCount } from '../validators/string.validator.isContainsOneOfRangeCount';
import { isContainsOneOfCharsCount } from '../validators/string.validator.isContainsOneOfCharsCount';
import { isContainsOneOfCharsMinCount } from '../validators/string.validator.isContainsOneOfCharsMinCount';
import { isContainsOneOfCharsMaxCount } from '../validators/string.validator.isContainsOneOfCharsMaxCount';
import { isContainsOneOfCharsRangeCount } from '../validators/string.validator.isContainsOneOfCharsRangeCount';
import { isMatch } from '../validators/string.validator.isMatch';
import { isOneOfCharsFollowByOneOfChars } from '../validators/string.validator.isOneOfCharsFollowByOneOfChars';
import { isFollowByOneOf } from '../validators/string.validator.isFollowByOneOf';
import { isFollowBy } from '../validators/string.validator.isFollowBy';

describe('FEAT: Validate a string with customs validation methods', () => {
  describe('GIVEN a string', () => {
    describe('WHEN string = "abc" and no validate function', () => {
      test('THEN it should return true', () => {
        const isValid: boolean = stringValidator('abc', []);
        expect(isValid).toBe(true);
      });
    });
    describe('RULE : is  empty', () => {
      describe('WHEN string = "abc"', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abc', [isEmpty()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ""', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('', [isEmpty()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is not empty', () => {
      describe('WHEN string = "abc" ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abc', [isNot(isEmpty())]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "" ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('', [isNot(isEmpty())]);
          expect(isValid).toBe(false);
        });
      });
    });

    describe('RULE : Minimum length', () => {
      describe('WHEN string = abc AND the required minimum length is 5', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abc', [isMinLength(5)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcde AND the required minimum length is 5', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcde', [isMinLength(5)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Maximum length', () => {
      describe('WHEN string = abcef AND the required maximum length is 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcef', [isMaxLength(3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab AND the required maximum length is 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abc', [isMaxLength(3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : range length', () => {
      describe('WHEN string = abcefg AND the required minimum length is 3 maximum length is 5', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcefg', [isRangeLength(3, 5)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND the required maximum length is 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd', [isRangeLength(3, 5)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : equal length', () => {
      describe('WHEN string = abcefg AND the required equal length is 4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcefg', [isLengthEqual(4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND the required equal length is 4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd', [isLengthEqual(4)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is upper case', () => {
      describe('WHEN string = abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcefg', [isUpper()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = Abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('Abcefg', [isUpper()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ABCD', [isUpper()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is lower case', () => {
      describe('WHEN string = ABCDEFG ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABCDEFG', [isLower()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = Abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('Abcefg', [isLower()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd', [isLower()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab cd', [isLower()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains only Alpha', () => {
      describe('WHEN string = ab12cefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab12cefg', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab1 2cefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab1 2cefg', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$ce#fg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab$ce#fg', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 12345 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('12345', [isAlpha()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab cd', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ABCDEF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ABCDEF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ABC DEF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ABC DEF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCDeF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCDeF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abC DeF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abC DeF', [isAlpha()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is AlphaNumeric', () => {
      describe('WHEN string = $#/( ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('$#/(', [isAlphaNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$cefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab$cefg', [isAlphaNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcde ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcde', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 12345 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('12345', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab123cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab123cd', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ABCDEF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ABCDEF', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abC125DeF ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abC125DeF', [isAlphaNumeric()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is Numeric', () => {
      describe('WHEN string = $#/( ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('$#/(', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcefg ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcefg', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$cde ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab$cde', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABCDE ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABCDE', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab123cd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab123cd', [isNumeric()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 12345 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('12345', [isNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = -12345 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('-12345', [isNumeric()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 1.234 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('1.234', [isNumeric()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains charset', () => {
      describe('WHEN string = abcd$123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd$123', [isContainsOneOfChars('ABCD')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsOneOfChars('ABCD')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains special chars', () => {
      describe('WHEN string = abcd123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsSpecialChars()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsSpecialChars()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains ', () => {
      describe('WHEN string = abcd$123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd$123', [isContains('cD$')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContains('Cd$1')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsAt('Cd', 2)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains at', () => {
      describe('WHEN string = abcd$123 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd$123', [isContainsAt('$', 5)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsAt('$', 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123AB ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsAt('Cd', 2)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : equal', () => {
      describe('WHEN string = ABcde, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isEqual('abcd')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd check = abcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isEqual('abcd', true)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd check = aBcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd', [isEqual('aBcd', true)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isEqual('abcd')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd, check = aBcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd', [isEqual('aBcd')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : not equal', () => {
      describe('WHEN string = ABcde, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isNot(isEqual('abcd'))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd check = abcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isNot(isEqual('abcd', true))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd check = aBcd, case-sensitive =  true ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd', [isNot(isEqual('aBcd', true))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd, check = abcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isNot(isEqual('abcd'))]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd, check = aBcd, case-sensitive =  false ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd', [isNot(isEqual('aBcd'))]);
          expect(isValid).toBe(false);
        });
      });
    });

    describe('RULE : starts with string', () => {
      describe('WHEN string = ABcde, AND startWith = cDe', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isStartsWith('cDe')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith = 123', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isStartsWith('123')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd AND startWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('#abcd', [isStartsWith('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith = aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isStartsWith('aB')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 123abcd AND startWith = 123', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('123abcd', [isStartsWith('123')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = #aBcd AND startWith = #a', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('#aBcd', [isStartsWith('#a')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with one of strings', () => {
      describe('WHEN string = ABcde, AND startWith one of = cDe, abd, abc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isStartsWithOneOf(['cDe', 'abd, abc'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of = 123, #ab, Ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isStartsWithOneOf(['123', '#ab', 'Ab'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd AND startWith one of = ab, $ab, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('#abcd', [isStartsWithOneOf(['ab', '$ab', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of = aB, a, aBc', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isStartsWithOneOf(['aB', 'a', 'aBc'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 123abcd AND startWith on of = 123, 12, 1', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('123abcd', [isStartsWithOneOf(['123', '12', '1'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = #aBcd AND startWith one of = #a, #A, #b', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('#aBcd', [isStartsWithOneOf(['#a', '#A', '#b'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with one of chars', () => {
      describe('WHEN string = ABcde, AND startWith one of chars = cDe', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isStartsWithOneOfChars('cDe')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of chars = 123', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isStartsWithOneOfChars('123')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd AND startWith one of chars = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('#abcd', [isStartsWithOneOfChars('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND startWith one of chars = aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isStartsWithOneOfChars('aB')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = 123abcd AND startWith one of chars = 123', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('123abcd', [isStartsWithOneOfChars('123')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = #aBcd AND startWith one of chars = $#*+', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('#aBcd', [isStartsWithOneOfChars('$#*+')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with string', () => {
      describe('WHEN string = ABcde, AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isEndsWith('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde, AND endWith = cde#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde#', [isEndsWith('cde')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = 123', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isEndsWith('123')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd', [isEndsWith('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isEndsWith('cd')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd123 AND endWith = 123', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd123', [isEndsWith('123')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd# AND endWith = a#', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd#', [isEndsWith('d#')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with one of strings', () => {
      describe('WHEN string = ABcde, AND endWith = ab, cd, ef', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isEndsWithOneOf(['ab', 'cd', 'ef'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde, AND endWith = cde, de$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde#', [isEndsWithOneOf(['cde', 'de$'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = 123,1$2, 12b', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isEndsWithOneOf(['123', '1$2', '12b'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND endWith = ab, dd, bd, db', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd', [isEndsWithOneOf(['ab', 'dd', 'bd', 'db'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = ad, CD, cd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isEndsWithOneOf(['ad', 'CD', 'cd'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd123 AND endWith = 24, 123, 12', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd123', [isEndsWithOneOf(['24', '123', '12'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd# AND endWith = d#, $d, ab', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd#', [isEndsWithOneOf(['d#', '$d', 'ab'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with one of chars', () => {
      describe('WHEN string = ABcde, AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isEndsWithOneOfChars('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde, AND endWith = cde$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde#', [isEndsWithOneOfChars('cde$')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = 145', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd', [isEndsWithOneOfChars('145')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd AND endWith = ab', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd', [isEndsWithOneOfChars('ab')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd AND endWith = cfd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isEndsWithOneOfChars('cfd')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcd123 AND endWith = 2, 3, 4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd123', [isEndsWithOneOfChars('234')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBcd# AND endWith = $#*+', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd#', [isEndsWithOneOfChars('$#*+')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with lower case', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isStartsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1aBcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('1aBcd', [isStartsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('#abcd', [isStartsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isStartsWithLowerCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with upper case', () => {
      describe('WHEN string = abcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcde', [isStartsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1aBcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('1aBcd', [isStartsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('#abcd', [isStartsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ABcd', [isStartsWithUpperCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with special char', () => {
      describe('WHEN string = abcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcde', [isStartsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcd', [isStartsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('1abcd', [isStartsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('#ABcd', [isStartsWithSpecialChar()]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = (ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('(ABcd', [isStartsWithSpecialChar()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : starts with number', () => {
      describe('WHEN string = abcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcde', [isStartsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcd', [isStartsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = #abcd', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('#abcd', [isStartsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = 1ABcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('1ABcd', [isStartsWithNumber()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with lower case', () => {
      describe('WHEN string = ABcDE', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcDE', [isEndsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd1', [isEndsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd#', [isEndsWithLowerCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBcd', [isEndsWithLowerCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with upper case', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isEndsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd1', [isEndsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd#', [isEndsWithUpperCase()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD', [isEndsWithUpperCase()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with special char', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isEndsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd1', [isEndsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCD', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCD', [isEndsWithSpecialChar()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBCD]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD]', [isEndsWithSpecialChar()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : ends with number', () => {
      describe('WHEN string = ABcde', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde', [isEndsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcd$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcd$', [isEndsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCD', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCD', [isEndsWithNumber()]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBCD8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD8', [isEndsWithNumber()]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : left of', () => {
      describe('WHEN string = ABc@de AND Left of = @ and search = BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABc@de', [isLeftOf('@', 'BC')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Left of = cd and search = aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcdeF', [isLeftOf('cd', 'aB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = B and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isLeftOf('B', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isLeftOf('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$CD', [isLeftOf('$', 'ab')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD8', [isLeftOf('CD', 'aB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : left Of One Of', () => {
      describe('WHEN string = ABc@de AND Left of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABc@de', [isLeftOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Left of = cd and search = aB, BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcdeF', [isLeftOfOneOf('cd', ['aB', 'BC'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = B and search = aBc, ha', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isLeftOfOneOf('B', ['aBc', 'ha'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = gh and search = aBc, aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isLeftOfOneOf('gh', ['aBc', 'aB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD  AND Left of = $ and search = ab, CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$CD', [isLeftOfOneOf('$', ['ab', 'CD'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8  AND Left of = CD and search = AA, aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD8', [isLeftOfOneOf('CD', ['AA', 'aB'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : left Of One Of char', () => {
      describe('WHEN string = ABc@de AND Left of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABc@de', [isLeftOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = @ABcde AND Left of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('@ABcde', [isLeftOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Left of = cd and search = cda1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcdeF', [isLeftOfOneOfChars('cd', 'cda1')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = B and search = 1Bc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isLeftOfOneOfChars('B', '1Bc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Left of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isLeftOfOneOfChars('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD AND Left of = $ and search = abCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$CD', [isLeftOfOneOfChars('$', 'abCD')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8 AND Left of = CD and search = cAaB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD8', [isLeftOfOneOfChars('CD', 'cAaB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : right of', () => {
      describe('WHEN string = ABc@de AND Right of = @ and search = BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABc@de', [isRightOf('@', 'BC')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd@e AND Right of = @ and search = BC', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcd@e', [isRightOf('@', 'BC')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABc@de AND Right of = @ and search = BCE', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABc@de', [isRightOf('@', 'BCE')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcdeF', [isRightOf('cd', 'aB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcdeF', [isRightOf('cd', 'aB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = B and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isRightOf('B', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = cd and search = eFG', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isRightOf('cd', 'eFG')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isRightOf('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD AND Right of = $ and search = CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$CD', [isRightOf('$', 'CD')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8 AND Right of = CD and search = 8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD8', [isRightOf('CD', '8')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : right Of One Of', () => {
      describe('WHEN string = ABc@de AND Right of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABc@de', [isRightOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde@ AND Right of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde@', [isRightOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcd@e AND Right of = @ and search = BC, AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcd@e', [isRightOfOneOf('@', ['BC', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = aB, BCG', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcdeF', [isRightOfOneOf('cd', ['aB', 'BCG'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = B and search = aBc, ha', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isRightOfOneOf('B', ['aBc', 'ha'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = gh and search = aBc, aB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isRightOfOneOf('gh', ['aBc', 'aB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD  AND Right of = $ and search = ab, CD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$CD', [isRightOfOneOf('$', ['ab', 'CD'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8  AND Right of = CD and search = AA, 8', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD8', [isRightOfOneOf('CD', ['AA', '8'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : right Of One Of char', () => {
      describe('WHEN string = ABc@de AND Right of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABc@de', [isRightOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcde@ AND Right of = @ and search = BCAB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcde@', [isRightOfOneOfChars('@', 'BCAB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ABcdeF AND Right of = cd and search = cda1', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ABcdeF', [isRightOfOneOfChars('cd', 'cda1')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = B and search = 1B#', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isRightOfOneOfChars('B', '1B#')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = aBcdeF AND Right of = gh and search = aBc', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('aBcdeF', [isRightOfOneOfChars('gh', 'aBc')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$CD AND Right of = $ and search = abCD', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$CD', [isRightOfOneOfChars('$', 'abCD')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = aBCD8 AND Right of = CD and search = cA8aB', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('aBCD8', [isRightOfOneOfChars('CD', 'cA8aB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By', () => {
      describe('WHEN string = (ABcde] AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('(ABcde]', [isSurroundBy('(', ')')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde) AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('[ABcde)', [isSurroundBy('(', ')')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde] AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('[ABcde]', [isSurroundBy('(', ')')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = <strong>ABcde</strong> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('<strong>ABcde</strong>', [isSurroundBy('<b>', '</b>')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = <strong>ABcde</b> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('<strong>ABcde</b>', [isSurroundBy('<b>', '</b>')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = <b>ABcde</strong> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('<b>ABcde</strong>', [isSurroundBy('<b>', '</b>')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = (ABcde) AND surroundBy = (, )', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('(ABcde)', [isSurroundBy('(', ')')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = <b>ABcde</b> AND surroundBy = <b>, </b>', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('<b>ABcde</b>', [isSurroundBy('<b>', '</b>')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By One of', () => {
      describe('WHEN string = _ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('_ABcde_', [isSurroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('**ABcde_', [isSurroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = _ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('**ABcde_', [isSurroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('**ABcde__', [isSurroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = **ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('**ABcde**', [isSurroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = __ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('**ABcde__', [isSurroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = __ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('__ABcde__', [isSurroundByOneOf(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By One of pairs', () => {
      describe('WHEN string = _ABcde** AND surroundBy = **,__; **,__,--', () => {
        test('THEN it should return false', () => {
          const isValidFn = () => {
            return stringValidator('**ABcde_', [isSurroundByOneOfPairs(['**', '__'], ['**', '__', '--'])]);
          };
          expect(isValidFn).toThrow('Arrays startsWith and EndsWith not have same length !');
        });
      });
      describe('WHEN string = _ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('_ABcde_', [isSurroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde_ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('**ABcde_', [isSurroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = _ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('**ABcde_', [isSurroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('**ABcde__', [isSurroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = __ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('**ABcde__', [isSurroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = **ABcde** AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('**ABcde**', [isSurroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });

      describe('WHEN string = __ABcde__ AND surroundBy = **,__; **,__', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('__ABcde__', [isSurroundByOneOfPairs(['**', '__'], ['**', '__'])]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : Surround By One Of Chars', () => {
      describe('WHEN string = (ABcde] AND surroundBy = ([, )}', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('(ABcde]', [isSurroundByOneOfChars('([', ')}')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde} AND surroundBy = ({, )}', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('[ABcde}', [isSurroundByOneOfChars('({', ')}')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = [ABcde] AND surroundBy = ({, )}', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('[ABcde]', [isSurroundByOneOfChars('({', ')}')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = (ABcde] AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('(ABcde]', [isSurroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = [ABcde) AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('[ABcde)', [isSurroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = [ABcde] AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('[ABcde]', [isSurroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = (ABcde) AND surroundBy = ([, )]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('(ABcde)', [isSurroundByOneOfChars('([', ')]')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains count', () => {
      describe('WHEN string = abcd123 AND subStr = $  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$Cd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab$Cd$123$AB', [isContainsCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdabcdef AND subStr = da  count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcdabcdabcdef', [isContainsCount('da', 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123$AB', [isContainsCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcdabcdabcdefabcda AND subStr = da  count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcdabcdabcdefabcda', [isContainsCount('da', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains min count', () => {
      describe('WHEN string = abcd123 AND subStr = $  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsMinCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsMinCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdbcdef AND subStr = da  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcdabcdbcdef', [isContainsMinCount('da', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123$AB', [isContainsMinCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab$Cd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$Cd$123$AB', [isContainsMinCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcdabcdabcdefabcbcdaef AND subStr = da  count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcdabcdabcdefabcbcdaef', [isContainsMinCount('da', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains max count', () => {
      describe('WHEN string = ab$Cd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$Cd$123$AB', [isContainsMaxCount('$', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdabcdedafabcbcdaefda AND subStr = da  count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcdabcdabcdedafabcbcdaefda', [isContainsMaxCount('da', 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcd123 AND subStr = $  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsMaxCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsMaxCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcdabcdbcdef AND subStr = da  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcdabcdbcdef', [isContainsMaxCount('da', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = $  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123$AB', [isContainsMaxCount('$', 2)]);
          expect(isValid).toBe(true);
        });
      });

      describe('RULE : contains range count', () => {
        describe('WHEN string = abCd123AB AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = stringValidator('abCd123AB', [isContainsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd123AB AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = stringValidator('ab$Cd123AB', [isContainsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd$12$3A$BcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = stringValidator('ab$Cd$12$3A$BcD$ef', [isContainsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = abcdabcabcdeafabcbcaefd AND subStr = da  min = 2 max = 3', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = stringValidator('abcdabcabcdeafabcbcaefd', [isContainsRangeCount('da', 2, 3)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = abdacdabcdabcdedafabcbcdaefd AND subStr = da  min = 2 max = 3', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = stringValidator('abdacdabcdabcdedafabcbcdaefd', [isContainsRangeCount('da', 2, 3)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd123ABcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('ab$Cd123ABcD$ef', [isContainsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd123$ABcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('ab$Cd123$ABcD$ef', [isContainsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd$123$ABcD$ef AND subStr = $  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('ab$Cd$123$ABcD$ef', [isContainsRangeCount('$', 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = abcdabcdabcdaef AND subStr = da  min = 3 max= 5', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('abcdabcdabcdaef', [isContainsRangeCount('da', 3, 5)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = abcdadabcdabcdadaef AND subStr = da  min = 3 max= 5', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('abcdadabcdabcdadaef', [isContainsRangeCount('da', 3, 5)]);
            expect(isValid).toBe(true);
          });
        });
      });
    });

    describe('RULE : contains one of count', () => {
      describe('WHEN string = abcd123 AND subStr = [$, 24]  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsOneOfCount(['$', '24'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = [$, 23]  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd$123$AB', [isContainsOneOfCount(['$', '23'], 2)]);
          expect(isValid).toBe(false);
        });
      });

      describe('WHEN string = abcdabcdabcdef AND subStr = [da, ab]  count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcdabcdabcdef', [isContainsOneOfCount(['da', 'ab'], 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = [$, 23]  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsOneOfCount(['$', '23'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$12$3AB AND subStr = [$, 23]  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$12$3AB', [isContainsOneOfCount(['$', '23'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = dabcddadc AND subStr = [da, cd]   count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('dabcddadc', [isContainsOneOfCount(['da', 'cd'], 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains min one of count', () => {
      describe('WHEN string = abcd123 AND subStr = [$, 24] count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsOneOfMinCount(['$', '24'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = [$, 24] count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsOneOfMinCount(['$', '24'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdbcdef AND subStr = [dab, cba] count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcdabcdbcdef', [isContainsOneOfMinCount(['dab', 'cba'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123$AB AND subStr = [$, 23] count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123$AB', [isContainsOneOfMinCount(['$', '23'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = dabefgcdaghicda AND subStr = [dab, cda] count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('dabefgcdaghicda', [isContainsOneOfMinCount(['dab', 'cda'], 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains max one of count', () => {
      describe('WHEN string = ab$Cd$123$AB AND subStr = [$, 23] count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$Cd$123$AB', [isContainsOneOfMaxCount(['$', '23'], 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abcdabcdabcdedafabcbcdaefda AND subStr = [dab, bc] count = 3', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcdabcdabcdedafabcbcdaefda', [isContainsOneOfMaxCount(['dab', 'bc'], 3)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abc$d123 AND subStr = [$, 24]  count = 2', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abc$d123', [isContainsOneOfMaxCount(['$', '24'], 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab$Cd$123AB AND subStr = [$, 23]  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab$Cd$123AB', [isContainsOneOfMaxCount(['$', '23'], 3)]);
          expect(isValid).toBe(true);
        });
      });

      describe('RULE : contains one of range count', () => {
        describe('WHEN string = abCd123AB AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = stringValidator('abCd123AB', [isContainsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd$123A$B23 AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return false', () => {
            const isValid: boolean = stringValidator('ab$Cd$123A$B23', [isContainsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(false);
          });
        });
        describe('WHEN string = ab$Cd123ABcD$ef AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('ab$Cd123ABcD$ef', [isContainsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd123ABcDef AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('ab$Cd123ABcDef', [isContainsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
        describe('WHEN string = ab$Cd12ABcD$ef AND subStr = [$, 23]  min = 2 max= 4', () => {
          test('THEN it should return true', () => {
            const isValid: boolean = stringValidator('ab$Cd12ABcD$ef', [isContainsOneOfRangeCount(['$', '23'], 2, 4)]);
            expect(isValid).toBe(true);
          });
        });
      });
    });

    describe('RULE : contains one of chars count', () => {
      describe('WHEN string = abcd123 AND subStr = $#€  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab$Cd$123$AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab$Cd$123$AB', [isContainsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1€23AB', [isContainsOneOfCharsCount('$#€', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$1€23$AB', [isContainsOneOfCharsCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1#23#AB', [isContainsOneOfCharsCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abcAbcDbcdefabcA AND subStr = DA  count = 3', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcAbcDbcdefabcA', [isContainsOneOfCharsCount('DA', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains one of chars min count', () => {
      describe('WHEN string = abcd123 AND subStr = $#€  count = 2', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcd123', [isContainsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab&Cd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1€23AB', [isContainsOneOfCharsMinCount('$#€', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$1€23$AB', [isContainsOneOfCharsMinCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1#23#AB', [isContainsOneOfCharsMinCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains one of chars max count', () => {
      describe('WHEN string = ab$Cd$1#2€3AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab$Cd$1#2€3AB', [isContainsOneOfCharsMaxCount('$#€', 2)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab&Cd$123AB AND subStr = $#€  count = 2 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$123AB', [isContainsOneOfCharsMaxCount('$#€', 2)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1€23AB', [isContainsOneOfCharsMaxCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$1€23$AB', [isContainsOneOfCharsMaxCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€  count = 3 ', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1#23#AB', [isContainsOneOfCharsMaxCount('$#€', 3)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : contains one of chars range count', () => {
      describe('WHEN string = abCd123AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd123AB', [isContainsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd12€3AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abCd12€3AB', [isContainsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = ab#Cd$1€2#3$AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab#Cd$1€2#3$AB', [isContainsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = abCd#1€23AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1€23AB', [isContainsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd$1€23$AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd$1€23$AB', [isContainsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = abCd#1#23#AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abCd#1#23#AB', [isContainsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = ab€Cd$1€23$AB AND subStr = $#€ min = 2 max=4', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab€Cd$1€23$AB', [isContainsOneOfCharsRangeCount('$#€', 2, 4)]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is Math with RegEx', () => {
      describe('WHEN string = "abcABd12"', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('abcABd12', [isMatch(new RegExp('^[a-zA-Z]+$'))]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "1245ab"', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('1245ab', [isMatch(new RegExp('^[0-9A-Z]+$'))]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "1245ab"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('1245ab', [isMatch(new RegExp('^[0-9]+[a-z]+$'))]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "abcABd12"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('abcABd12', [isMatch(new RegExp('^[A-Za-z0-9]+$'))]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : is one of chars is follow by one of chars', () => {
      describe('WHEN string = "ab_cA-Bd12" chars = _. followBy = @$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_cA-Bd12', [isOneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_.cA$Bd12" chars = _. followBy = @$', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_.cA$Bd12', [isOneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_$cA.Bd12" chars = _. followBy = @$"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab_$cA.Bd12', [isOneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_$cA-@Bd12" chars = _. followBy = @$"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab_$cA-@Bd12', [isOneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_cA--$Bd12" chars = _. followBy = @$"', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab_cA--$Bd12', [isOneOfCharsFollowByOneOfChars('_-', '$@')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : subStr is follow by another string', () => {
      describe('WHEN string = "ab_dABd12" subStr = cA followBy = AB', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_dABd12', [isFollowBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_cABd12', [isFollowBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAaBd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_cAaBd12', [isFollowBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAA_Bd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_cAA_Bd12', [isFollowBy('cA', 'AB')]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab_cAABd12', [isFollowBy('cA', 'AB')]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_cAABcAABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab_cAABcAABd12', [isFollowBy('cA', 'AB')]);
          expect(isValid).toBe(true);
        });
      });
    });

    describe('RULE : subStr is follow by one of chars', () => {
      describe('WHEN string = "ab_dABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_dABd12', [isFollowByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_cABd12', [isFollowByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAaBd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_cAaBd12', [isFollowByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAA_Bd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return false', () => {
          const isValid: boolean = stringValidator('ab_cAA_Bd12', [isFollowByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(false);
        });
      });
      describe('WHEN string = "ab_cAABd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab_cAABd12', [isFollowByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(true);
        });
      });
      describe('WHEN string = "ab_cA$Bd12" subStr = cA followBy = [@, AB]', () => {
        test('THEN it should return true', () => {
          const isValid: boolean = stringValidator('ab_cA$Bd12', [isFollowByOneOf('cA', ['$', 'AB'])]);
          expect(isValid).toBe(true);
        });
      });
    });
  });
});
