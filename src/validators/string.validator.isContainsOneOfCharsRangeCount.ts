import { ValidatorFunc } from '../stringValidator';

const create = (chars: string, min: number, max: number): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      let totalCount = 0;
      chars.split('').some(char => {
        if (value.includes(char)) {
          totalCount += value.split(char).length - 1;
        }
      });
      return totalCount >= min && totalCount <= max;
    },
  });
};

export const isContainsOneOfCharsRangeCount = (chars: string, min: number, max: number) => {
  return create(chars, min, max);
};
