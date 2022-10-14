import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const lastChar = value.charAt(value.length - 1);
      return lastChar >= '0' && lastChar <= '9';
    },
  });
};

export const isEndsWithNumber = () => {
  return create();
};
