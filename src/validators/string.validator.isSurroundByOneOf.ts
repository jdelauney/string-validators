import { stringValidator, ValidatorFunc } from '../stringValidator';
import { isStartsWithOneOf } from './string.validator.isStartsWithOneOf';
import { isEndsWithOneOf } from './string.validator.isEndsWithOneOf';

const create = (startsWith: string[], endsWith: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const result = stringValidator(value, [isStartsWithOneOf(startsWith)]);
      return result && stringValidator(value, [isEndsWithOneOf(endsWith)]);
    },
  });
};

export const isSurroundByOneOf = (startsWith: string[], endsWith: string[]) => {
  return create(startsWith, endsWith);
};
