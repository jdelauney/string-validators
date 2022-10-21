import { validator, ValidatorFunc } from '../validator';
import { isOdd } from '../utils/numberHelpers';
import { startsWithOneOfChars } from './string.validator.startsWithOneOfChars';

const create = (subStr: string, followByOneOfChars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let result = false;
      const strArray = value.split(subStr);
      if (strArray.length === 0) {
        return false;
      }
      for (const [index, part] of strArray.entries()) {
        if (isOdd(Number(index))) {
          if (part === '') {
            return true;
          }
          const isFollow = validator(part, [startsWithOneOfChars(followByOneOfChars)]);
          result = result || isFollow;
        }
      }
      return result;
    },
  });
};

export const followByOneOfChars = (subStr: string, followByOneOfChars: string) => {
  return create(subStr, followByOneOfChars);
};
