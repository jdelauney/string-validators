import { ValidatorFunc } from '../validator';

const create = (chars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return chars.split('').some(char => {
        return value.endsWith(char);
      });
    },
  });
};

export const endsWithOneOfChars = (chars: string) => {
  return create(chars);
};
