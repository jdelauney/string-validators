import { validator, ValidatorFunc } from '../validator';
import { startsWith } from './string.validator.startsWith';
import { endsWith } from './string.validator.endsWith';

const create = (startsWithStr: string, endsWithStr: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const result = validator(value, [startsWith(startsWithStr)]);
      return result && validator(value, [endsWith(endsWithStr)]);
    },
  });
};

export const surroundBy = (startsWith: string, endsWith: string) => {
  return create(startsWith, endsWith);
};
