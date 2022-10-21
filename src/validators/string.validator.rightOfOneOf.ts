import { ValidatorFunc } from '../validator';

const create = (splitStr: string, mustBe: string[]): ValidatorFunc => {
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
      return mustBe.some(word => {
        const endPos = startPos + word.length;
        if (endPos > value.length) {
          return false;
        }
        return value.slice(startPos, endPos) === word;
      });
    },
  });
};

export const rightOfOneOf = (splitStr: string, mustBe: string[]) => {
  return create(splitStr, mustBe);
};
