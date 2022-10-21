import { ValidatorFunc } from '../validator';

const create = (subStr: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.includes(subStr);
    },
  });
};

export const contains = (subStr: string) => {
  return create(subStr);
};
