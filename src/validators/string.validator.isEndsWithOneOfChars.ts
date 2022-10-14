import { ValidatorFunc } from '../stringValidator';

const create = (chars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return chars.split('').some(char => {
        return value.endsWith(char);
      });
    },
  });
};

export const isEndsWithOneOfChars = (chars: string) => {
  return create(chars);
};
