import { ValidatorFunc } from '../validator';

const create = (chars: string, min: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      chars.split('').some(char => {
        if (value.includes(char)) {
          totalCount += value.split(char).length - 1;
        }
      });
      return totalCount >= min;
    },
  });
};

export const containsOneOfCharsMinCount = (chars: string, min: number) => {
  return create(chars, min);
};
