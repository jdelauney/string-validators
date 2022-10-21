import { ValidatorFunc } from '../validator';

const create = (strings: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return strings.some(str => {
        return value.startsWith(str);
      });
    },
  });
};

export const startsWithOneOf = (strings: string[]) => {
  return create(strings);
};
