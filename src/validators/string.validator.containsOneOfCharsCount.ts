import { ValidatorFunc } from '../validator';

const create = (chars: string, count: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      chars.split('').some(char => {
        if (value.includes(char)) {
          totalCount += value.split(char).length - 1;
        }
      });
      return totalCount === count;
    },
  });
};

export const containsOneOfCharsCount = (chars: string, count: number) => {
  return create(chars, count);
};
