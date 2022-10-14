import { stringValidator, ValidatorFunc } from '../stringValidator';
import { isStartsWith } from './string.validator.isStartsWith';
import { isEndsWith } from './string.validator.isEndsWith';

const create = (startsWith: string[], endsWith: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let result = false;
      if (startsWith.length !== endsWith.length) {
        throw new Error('Arrays startsWith and EndsWith not have same length !');
      }
      for (const [index, str] of startsWith.entries()) {
        result = stringValidator(value, [isStartsWith(str)]) && stringValidator(value, [isEndsWith(endsWith[index])]);
        if (result) {
          break;
        }
      }
      return result;
    },
  });
};

export const isSurroundByOneOfPairs = (startsWith: string[], endsWith: string[]) => {
  return create(startsWith, endsWith);
};
