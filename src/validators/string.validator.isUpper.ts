import { ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value === value.toUpperCase();
    },
  });
};

export const isUpper = () => {
  return create();
};
