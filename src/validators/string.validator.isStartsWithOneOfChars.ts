import { ValidatorFunc } from '../stringValidator';

const create = (chars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return chars.split('').some(char => {
        return value.startsWith(char);
      });
    },
  });
};

export const isStartsWithOneOfChars = (chars: string) => {
  return create(chars);
};