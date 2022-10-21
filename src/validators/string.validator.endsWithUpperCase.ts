import { ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const lastChar = value.charAt(value.length - 1);
      return lastChar >= 'A' && lastChar <= 'Z';
    },
  });
};

export const endsWithUpperCase = () => {
  return create();
};
