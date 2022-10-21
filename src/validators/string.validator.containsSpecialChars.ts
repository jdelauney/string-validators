import { CHARSET_MATHS_SIGN, CHARSET_PUNCTUATION, CHARSET_SPECIAL_CHARS, ValidatorFunc } from '../validator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const specialChars = CHARSET_SPECIAL_CHARS + CHARSET_PUNCTUATION + CHARSET_MATHS_SIGN;
      return specialChars.split('').some(char => {
        return value.includes(char);
      });
    },
  });
};

export const containsSpecialChars = () => {
  return create();
};
