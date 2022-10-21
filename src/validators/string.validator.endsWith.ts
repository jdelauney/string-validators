import { ValidatorFunc } from '../validator';

const create = (endWith: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.endsWith(endWith);
    },
  });
};

export const endsWith = (endWith: string) => {
  return create(endWith);
};
