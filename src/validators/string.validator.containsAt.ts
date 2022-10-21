import { ValidatorFunc } from '../validator';

const create = (subStr: string, pos: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value.substring(pos, pos + subStr.length) === subStr;
    },
  });
};

export const containsAt = (subStr: string, pos: number) => {
  return create(subStr, pos);
};
