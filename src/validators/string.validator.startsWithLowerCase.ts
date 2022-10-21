import { ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const firstChar = value.charAt(0);
      return firstChar >= 'a' && firstChar <= 'z';
    },
  });
};

export const startsWithLowerCase = () => {
  return create();
};
