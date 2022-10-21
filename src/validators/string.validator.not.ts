import { validator, ValidatorFunc } from '../validator';

const create = (testFunc: ValidatorFunc): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return !validator(value, [testFunc]);
    },
  });
};

export const not = (testFunc: ValidatorFunc) => {
  return create(testFunc);
};
