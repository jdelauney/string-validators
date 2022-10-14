import { ValidatorFunc } from '../stringValidator';

const create = (strs: string[], max: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      strs.some(word => {
        if (value.includes(word)) {
          totalCount += value.split(word).length - 1;
        }
      });
      return totalCount <= max;
    },
  });
};

export const isContainsOneOfMaxCount = (strs: string[], max: number) => {
  return create(strs, max);
};
