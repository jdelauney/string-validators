import { ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value === value.toLowerCase();
    },
  });
};

export const isLower = () => {
  return create();
};
