import { ValidatorFunc } from '../stringValidator';

const create = (startWith: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.startsWith(startWith);
    },
  });
};

export const isStartsWith = (startWith: string) => {
  return create(startWith);
};
