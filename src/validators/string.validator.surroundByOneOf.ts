import { validator, ValidatorFunc } from '../validator';
import { startsWithOneOf } from './string.validator.startsWithOneOf';
import { endsWithOneOf } from './string.validator.endsWithOneOf';

const create = (startsWith: string[], endsWith: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const result = validator(value, [startsWithOneOf(startsWith)]);
      return result && validator(value, [endsWithOneOf(endsWith)]);
    },
  });
};

export const surroundByOneOf = (startsWith: string[], endsWith: string[]) => {
  return create(startsWith, endsWith);
};
