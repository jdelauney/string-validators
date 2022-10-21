import { ValidatorFunc } from '../validator';

const create = (splitStr: string, mustBe: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const splitStrPos = value.indexOf(splitStr);
      if (splitStrPos < 0) {
        return false;
      }
      const startPos = splitStrPos + splitStr.length;
      if (startPos + mustBe.length > value.length) {
        return false;
      }
      const endPos = startPos + mustBe.length;
      if (endPos > value.length) {
        return false;
      }
      return value.slice(startPos, endPos) === mustBe;
    },
  });
};

export const rightOf = (splitStr: string, mustBe: string) => {
  return create(splitStr, mustBe);
};
