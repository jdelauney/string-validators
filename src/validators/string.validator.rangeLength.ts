import { ValidatorFunc } from '../validator';

const create = (minlength: number, maxlength: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length >= minlength && value.length <= maxlength;
    },
  });
};

export const rangeLength = (minlength: number, maxlength: number) => {
  return create(minlength, maxlength);
};
