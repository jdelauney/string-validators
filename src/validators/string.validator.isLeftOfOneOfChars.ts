import { ValidatorFunc } from '../stringValidator';

const create = (splitStr: string, chars: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const splitStrPos = value.indexOf(splitStr);
      if (splitStrPos < 0) {
        return false;
      }
      return chars.split('').some(char => {
        const startPos = splitStrPos - 1;
        if (startPos < 0) {
          return false;
        }
        return value.slice(startPos, splitStrPos) === char;
      });
    },
  });
};

export const isLeftOfOneOfChars = (splitStr: string, chars: string) => {
  return create(splitStr, chars);
};
