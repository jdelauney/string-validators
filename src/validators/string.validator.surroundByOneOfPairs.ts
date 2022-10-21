import { validator, ValidatorFunc } from '../validator';
import { startsWith } from './string.validator.startsWith';
import { endsWith } from './string.validator.endsWith';

const create = (startsWithStrs: string[], endsWithStrs: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let result = false;
      if (startsWithStrs.length !== endsWithStrs.length) {
        throw new Error('Arrays startsWith and EndsWith not have same length !');
      }
      for (const [index, str] of startsWithStrs.entries()) {
        result = validator(value, [startsWith(str)]) && validator(value, [endsWith(endsWithStrs[index])]);
        if (result) {
          break;
        }
      }
      return result;
    },
  });
};

export const surroundByOneOfPairs = (startsWith: string[], endsWith: string[]) => {
  return create(startsWith, endsWith);
};
