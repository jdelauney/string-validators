import { validator, ValidatorFunc } from '../validator';
import { startsWithOneOfChars } from './string.validator.startsWithOneOfChars';
import { endsWithOneOfChars } from './string.validator.endsWithOneOfChars';

const create = (startsWith: string, endsWith: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const result = validator(value, [startsWithOneOfChars(startsWith)]);
      return result && validator(value, [endsWithOneOfChars(endsWith)]);
    },
  });
};

export const surroundByOneOfChars = (startsWith: string, endsWith: string) => {
  return create(startsWith, endsWith);
};
