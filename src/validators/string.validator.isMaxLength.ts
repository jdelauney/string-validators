import { ValidatorFunc } from '../stringValidator';

const create = (maxlength: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.length <= maxlength;
    },
  });
};

export const isMaxLength = (maxlength: number) => {
  return create(maxlength);
};
