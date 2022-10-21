import { ValidatorFunc } from '../validator';

const create = (strs: string[], count: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      strs.some(word => {
        if (value.includes(word)) {
          totalCount += value.split(word).length - 1;
        }
      });
      return totalCount === count;
    },
  });
};

export const containsOneOfCount = (strs: string[], count: number) => {
  return create(strs, count);
};
