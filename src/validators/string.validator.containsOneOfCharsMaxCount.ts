import { ValidatorFunc } from '../validator';

const create = (chars: string, max: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      chars.split('').some(char => {
        if (value.includes(char)) {
          totalCount += value.split(char).length - 1;
        }
      });
      return totalCount <= max;
    },
  });
};

export const containsOneOfCharsMaxCount = (chars: string, max: number) => {
  return create(chars, max);
};
