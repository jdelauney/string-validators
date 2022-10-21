import { ValidatorFunc } from '../validator';

const create = (strs: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return strs.some(word => {
        return value.includes(word);
      });
    },
  });
};

export const containsOneOf = (strs: string[]) => {
  return create(strs);
};
