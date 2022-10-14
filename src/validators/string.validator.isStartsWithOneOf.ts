import { ValidatorFunc } from '../stringValidator';

const create = (strings: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return strings.some(str => {
        return value.startsWith(str);
      });
    },
  });
};

export const isStartsWithOneOf = (strings: string[]) => {
  return create(strings);
};
