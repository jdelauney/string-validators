import { validator, ValidatorFunc } from '../validator';
import { isOdd } from '../utils/numberHelpers';
import { startsWith } from './string.validator.startsWith';

const create = (subStr: string, followBy: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let result = false;
      const strArray = value.split(subStr);
      if (strArray.length === 0) {
        return false;
      }
      for (const [index, part] of strArray.entries()) {
        let isFollow = false;
        if (isOdd(Number(index))) {
          if (part === '') {
            return true;
          }
          for (const followWord of followBy) {
            const checkFollow = validator(part, [startsWith(followWord)]);
            isFollow = !isFollow && checkFollow;
            result = result || isFollow;
          }
        }
      }
      return result;
    },
  });
};

export const followByOneOf = (subStr: string, followBy: string[]) => {
  return create(subStr, followBy);
};
