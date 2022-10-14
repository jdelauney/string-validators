import { stringValidator, ValidatorFunc } from '../stringValidator';
import { isOdd } from '../utils/numberHelpers';
import { isStartsWith } from './string.validator.isStartsWith';

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
            const checkFollow = stringValidator(part, [isStartsWith(followWord)]);
            isFollow = !isFollow && checkFollow;
            result = result || isFollow;
          }
        }
      }
      return result;
    },
  });
};

export const isFollowByOneOf = (subStr: string, followBy: string[]) => {
  return create(subStr, followBy);
};
