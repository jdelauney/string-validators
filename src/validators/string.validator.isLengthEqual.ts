import { ValidatorFunc } from '../stringValidator';

const create = (length: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length === length;
    },
  });
};

export const isLengthEqual = (length: number) => {
  return create(length);
};
