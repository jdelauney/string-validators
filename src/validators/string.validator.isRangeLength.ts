import { ValidatorFunc } from '../stringValidator';

const create = (minlength: number, maxlength: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length >= minlength && value.length <= maxlength;
    },
  });
};

export const isRangeLength = (minlength: number, maxlength: number) => {
  return create(minlength, maxlength);
};
