import { ValidatorFunc } from '../stringValidator';

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

export const isContainsOneOfCount = (strs: string[], count: number) => {
  return create(strs, count);
};
