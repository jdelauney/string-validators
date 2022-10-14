import { ValidatorFunc } from '../stringValidator';

const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const firstChar = value.charAt(0);
      const specialChars = `&~#'{}()[]?!$£µ%/*-+=.,;:ù<>\\^°@|_"`;
      return specialChars.split('').some(char => {
        return firstChar.startsWith(char);
      });
    },
  });
};

export const isStartsWithSpecialChar = () => {
  return create();
};
