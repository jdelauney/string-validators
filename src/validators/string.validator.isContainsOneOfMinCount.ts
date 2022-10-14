import { ValidatorFunc } from '../stringValidator';

const create = (strs: string[], min: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      strs.some(word => {
        if (value.includes(word)) {
          totalCount += value.split(word).length - 1;
        }
      });
      return totalCount >= min;
    },
  });
};

export const isContainsOneOfMinCount = (strs: string[], min: number) => {
  return create(strs, min);
};
