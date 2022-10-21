import { ValidatorFunc } from '../validator';

const create = (maxlength: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length <= maxlength;
    },
  });
};

export const maxLength = (maxlength: number) => {
  return create(maxlength);
};
