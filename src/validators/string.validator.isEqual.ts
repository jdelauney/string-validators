import { ValidatorFunc } from '../stringValidator';

const create = (equalStr: string, caseSensitive = false): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      if (caseSensitive) {
        return value === equalStr;
      }
      return value.toLowerCase() === equalStr.toLowerCase();
    },
  });
};

export const isEqual = (equalStr: string, caseSensitive = false) => {
  return create(equalStr, caseSensitive);
};
