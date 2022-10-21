import { ValidatorFunc } from '../validator';

const create = (strings: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return strings.some(str => {
        return value.endsWith(str);
      });
    },
  });
};

export const endsWithOneOf = (strings: string[]) => {
  return create(strings);
};
