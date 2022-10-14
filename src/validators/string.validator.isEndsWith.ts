import { ValidatorFunc } from '../stringValidator';

const create = (endWith: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.endsWith(endWith);
    },
  });
};

export const isEndsWith = (endWith: string) => {
  return create(endWith);
};
