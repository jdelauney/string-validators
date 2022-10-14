import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const firstChar = value.charAt(0);
      return firstChar >= 'A' && firstChar <= 'Z';
    },
  });
};

export const isStartsWithUpperCase = () => {
  return create();
};
