import { validator, ValidatorFunc } from '../validator';

const create = (testFunc1: ValidatorFunc, testFunc2: ValidatorFunc): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return validator(value, [testFunc1]) || validator(value, [testFunc2]);
    },
  });
};

export const or = (testFunc1: ValidatorFunc, testFunc2: ValidatorFunc) => {
  return create(testFunc1, testFunc2);
};
