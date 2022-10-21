import { ValidatorFunc } from '../validator';

const create = (startWith: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.startsWith(startWith);
    },
  });
};

export const startsWith = (startWith: string) => {
  return create(startWith);
};
