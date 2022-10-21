import { validator, ValidatorFunc } from '../validator';
import { isOdd } from '../utils/numberHelpers';
import { startsWith } from './string.validator.startsWith';

const create = (substr: string, followBy: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const strArray = value.split(substr);
      let result = false;
      let isFollow = false;
      for (const [index, part] of strArray.entries()) {
        if (isOdd(Number(index))) {
          isFollow = !isFollow && validator(part, [startsWith(followBy)]);
          result = result || isFollow;
        }
      }
      return result;
    },
  });
};

export const followBy = (substr: string, followBy: string) => {
  return create(substr, followBy);
};
