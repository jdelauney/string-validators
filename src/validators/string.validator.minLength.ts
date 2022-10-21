import { ValidatorFunc } from '../validator';

const create = (minlength: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length >= minlength;
    },
  });
};

export const minLength = (minlength: number) => {
  return create(minlength);
};
