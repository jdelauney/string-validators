import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const lastChar = value.charAt(value.length - 1);
      const specialChars = `&~#'{}()[]?!$£µ%/*-+=.,;:ù<>\\^°@|_"`;
      return specialChars.split('').some(char => {
        return lastChar.endsWith(char);
      });
    },
  });
};

export const isEndsWithSpecialChar = () => {
  return create();
};
