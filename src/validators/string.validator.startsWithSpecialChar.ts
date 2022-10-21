import { ValidatorFunc } from '../validator';

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

export const startsWithSpecialChar = () => {
  return create();
};
