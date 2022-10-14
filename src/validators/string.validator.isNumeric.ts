import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return !isNaN(Number(value));
    },
  });
};

export const isNumeric = () => {
  return create();
};
