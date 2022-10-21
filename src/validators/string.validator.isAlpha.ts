import { ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      for (const code of value) {
        if (!(code >= 'A' && code <= 'Z') && !(code >= 'a' && code <= 'z') && code !== ' ') {
          return false;
        }
      }
      return true;
    },
  });
};

export const isAlpha = () => {
  return create();
};
