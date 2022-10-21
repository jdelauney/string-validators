import { validator, ValidatorFunc } from '../validator';
import { isOdd } from '../utils/numberHelpers';
import { startsWith } from './string.validator.startsWith';

const create = (subStrs: string[], followBy: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let result = false;
      for (const word of subStrs) {
        const strArray = value.split(word);
        for (const [index, part] of strArray.entries()) {
          if (isOdd(Number(index))) {
            if (part === '') {
              return true;
            }
            const isFollow = validator(part, [startsWith(followBy)]);
            result = result || isFollow;
          }
        }
      }
      return result;
    },
  });
};

export const oneOfFollowBy = (subStrs: string[], followBy: string) => {
  return create(subStrs, followBy);
};
