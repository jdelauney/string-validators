import { ValidatorFunc } from '../validator';

const create = (splitStr: string, chars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const splitStrPos = value.indexOf(splitStr);
      if (splitStrPos < 0) {
        return false;
      }
      const startPos = splitStrPos + splitStr.length;
      if (startPos > value.length - 1) {
        return false;
      }
      const endPos = startPos + 1;
      return chars.split('').some(char => {
        return value.slice(startPos, endPos) === char;
      });
    },
  });
};

export const rightOfOneOfChars = (splitStr: string, chars: string) => {
  return create(splitStr, chars);
};
