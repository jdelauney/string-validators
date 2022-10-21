import { ValidatorFunc } from '../validator';

const create = (splitStr: string, mustBe: string): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      const splitStrPos = value.indexOf(splitStr);
      if (splitStrPos < 0) {
        return false;
      }
      const startPos = splitStrPos - mustBe.length;
      if (startPos < 0) {
        return false;
      }
      return value.slice(startPos, splitStrPos) === mustBe;
    },
  });
};

export const leftOf = (splitStr: string, mustBe: string) => {
  return create(splitStr, mustBe);
};
