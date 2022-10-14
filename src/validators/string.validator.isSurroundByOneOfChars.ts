import { stringValidator, ValidatorFunc } from '../stringValidator';
import { isStartsWithOneOfChars } from './string.validator.isStartsWithOneOfChars';
import { isEndsWithOneOfChars } from './string.validator.isEndsWithOneOfChars';

const create = (startsWith: string, endsWith: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const result = stringValidator(value, [isStartsWithOneOfChars(startsWith)]);
      return result && stringValidator(value, [isEndsWithOneOfChars(endsWith)]);
    },
  });
};

export const isSurroundByOneOfChars = (startsWith: string, endsWith: string) => {
  return create(startsWith, endsWith);
};
