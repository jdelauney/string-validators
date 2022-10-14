import { ValidatorFunc } from '../stringValidator';

const create = (minlength: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length >= minlength;
    },
  });
};

export const isMinLength = (minlength: number) => {
  return create(minlength);
};
