import { validator, ValidatorFunc } from '../validator';
import { isOdd } from '../utils/numberHelpers';
import { startsWith } from './string.validator.startsWith';

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
              const checkFollow = validator(part, [startsWith(followChar)]);
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

export const oneOfCharsFollowByOneOfChars = (chars: string, followByOneOfChars: string) => {
  return create(chars, followByOneOfChars);
};
