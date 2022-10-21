import { validator, ValidatorFunc } from '../validator';
import { containsOneOfChars } from './string.validator.containsOneOfChars';

const create = (chars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let result = true;
      const strChars = value.split('');
      for (const strChar of strChars) {
        result = result && validator(strChar, [containsOneOfChars(chars)]);
        if (!result) {
          break;
        }
      }
      return result;
    },
  });
};

export const containsOnlyOneOfChars = (chars: string) => {
  return create(chars);
};
