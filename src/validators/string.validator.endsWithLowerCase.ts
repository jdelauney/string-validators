import { ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const lastChar = value.charAt(value.length - 1);
      return lastChar >= 'a' && lastChar <= 'z';
    },
  });
};

export const endsWithLowerCase = () => {
  return create();
};
