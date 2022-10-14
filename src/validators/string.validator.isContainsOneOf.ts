import { ValidatorFunc } from '../stringValidator';

const create = (strs: string[]): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return strs.some(word => {
        return value.includes(word);
      });
    },
  });
};

export const isContainsOneOf = (strs: string[]) => {
  return create(strs);
};
