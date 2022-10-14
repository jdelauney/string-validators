import { stringValidator, ValidatorFunc } from '../stringValidator';
import { isStartsWith } from './string.validator.isStartsWith';
import { isEndsWith } from './string.validator.isEndsWith';

const create = (startsWith: string, endsWith: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const result = stringValidator(value, [isStartsWith(startsWith)]);
      return result && stringValidator(value, [isEndsWith(endsWith)]);
    },
  });
};

export const isSurroundBy = (startsWith: string, endsWith: string) => {
  return create(startsWith, endsWith);
};
