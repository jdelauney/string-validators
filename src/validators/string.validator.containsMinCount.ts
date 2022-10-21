import { ValidatorFunc } from '../validator';

const create = (subStr: string, count: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.split(subStr).length - 1 >= count;
    },
  });
};

export const containsMinCount = (subStr: string, count: number) => {
  return create(subStr, count);
};
