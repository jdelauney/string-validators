import { ValidatorFunc } from '../validator';

const create = (strs: string[], min: number, max: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      strs.some(word => {
        if (value.includes(word)) {
          totalCount += value.split(word).length - 1;
        }
      });
      return totalCount >= min && totalCount <= max;
    },
  });
};

export const containsOneOfRangeCount = (strs: string[], min: number, max: number) => {
  return create(strs, min, max);
};
