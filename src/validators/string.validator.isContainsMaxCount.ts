import { ValidatorFunc } from '../stringValidator';

const create = (subStr: string, count: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.split(subStr).length - 1 <= count;
    },
  });
};

export const isContainsMaxCount = (subStr: string, count: number) => {
  return create(subStr, count);
};
