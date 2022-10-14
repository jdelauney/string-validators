import { ValidatorFunc } from '../stringValidator';

const create = (strings: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return strings.some(str => {
        return value.endsWith(str);
      });
    },
  });
};

export const isEndsWithOneOf = (strings: string[]) => {
  return create(strings);
};
