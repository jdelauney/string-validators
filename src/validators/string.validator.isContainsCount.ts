import { ValidatorFunc } from '../stringValidator';

const create = (subStr: string, count: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return count === value.split(subStr).length - 1;
    },
  });
};

export const isContainsCount = (subStr: string, count: number) => {
  return create(subStr, count);
};
