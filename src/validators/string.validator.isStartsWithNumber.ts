import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const firstChar = value.charAt(0);
      return firstChar >= '0' && firstChar <= '9';
    },
  });
};

export const isStartsWithNumber = () => {
  return create();
};
