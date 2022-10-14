import { ValidatorFunc } from '../stringValidator';

const create = (chars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return chars.split('').some(char => {
        return value.includes(char);
      });
    },
  });
};

export const isContainsOneOfChars = (chars: string) => {
  return create(chars);
};
