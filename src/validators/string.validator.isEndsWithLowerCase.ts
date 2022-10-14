import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const lastChar = value.charAt(value.length - 1);
      return lastChar >= 'a' && lastChar <= 'z';
    },
  });
};

export const isEndsWithLowerCase = () => {
  return create();
};
