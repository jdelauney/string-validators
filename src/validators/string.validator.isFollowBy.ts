import { stringValidator, ValidatorFunc } from '../stringValidator';
import { isOdd } from '../utils/numberHelpers';
import { isStartsWith } from './string.validator.isStartsWith';

const create = (substr: string, followBy: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const strArray = value.split(substr);
      let result = false;
      let isFollow = false;
      for (const [index, part] of strArray.entries()) {
        if (isOdd(Number(index))) {
          isFollow = !isFollow && stringValidator(part, [isStartsWith(followBy)]);
          result = result || isFollow;
        }
      }
      return result;
    },
  });
};

export const isFollowBy = (substr: string, followBy: string) => {
  return create(substr, followBy);
};
