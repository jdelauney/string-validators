import { ValidatorFunc } from '../validator';

const create = (subStr: string, min: number, max: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.split(subStr).length - 1 >= min && value.split(subStr).length - 1 <= max;
    },
  });
};

export const containsRangeCount = (subStr: string, min: number, max: number) => {
  return create(subStr, min, max);
};
