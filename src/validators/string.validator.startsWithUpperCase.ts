import { ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const firstChar = value.charAt(0);
      return firstChar >= 'A' && firstChar <= 'Z';
    },
  });
};

export const startsWithUpperCase = () => {
  return create();
};
