import { ValidatorFunc } from '../validator';

const create = (length: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length === length;
    },
  });
};

export const lengthEqual = (length: number) => {
  return create(length);
};
