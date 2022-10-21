import { ValidatorFunc } from '../validator';

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

export const containsOneOfMaxCount = (strs: string[], max: number) => {
  return create(strs, max);
};
