import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      for (const code of value) {
        if (!(code >= '0' && code <= '9') && !(code >= 'A' && code <= 'Z') && !(code >= 'a' && code <= 'z') && code !== ' ') {
          return false;
        }
      }
      return true;
    },
  });
};

export const isAlphaNumeric = () => {
  return create();
};
