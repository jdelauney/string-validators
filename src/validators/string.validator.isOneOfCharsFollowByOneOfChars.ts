import { stringValidator, ValidatorFunc } from '../stringValidator';
import { isOdd } from '../utils/numberHelpers';
import { isStartsWith } from './string.validator.isStartsWith';

const create = (chars: string, followByOneOfChars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let result = false;
      const charArray = chars.split('');
      const followChars = followByOneOfChars.split('');
      for (const char of charArray) {
        const strArray = value.split(char);
        for (const [index, part] of strArray.entries()) {
          let isFollow = false;
          if (isOdd(Number(index))) {
            if (part === '') {
              return true;
            }
            for (const followChar of followChars) {
              const checkFollow = stringValidator(part, [isStartsWith(followChar)]);
              isFollow = !isFollow && checkFollow;
              result = result || isFollow;
            }
          }
        }
      }
      return result;
    },
  });
};

export const isOneOfCharsFollowByOneOfChars = (chars: string, followByOneOfChars: string) => {
  return create(chars, followByOneOfChars);
};
