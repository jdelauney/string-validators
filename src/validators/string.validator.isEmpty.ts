import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value === '';
    },
  });
};

export const isEmpty = () => {
  return create();
};
