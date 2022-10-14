import { ValidatorFunc } from '../stringValidator';

const create = (subStr: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.includes(subStr);
    },
  });
};

export const isContains = (subStr: string) => {
  return create(subStr);
};
