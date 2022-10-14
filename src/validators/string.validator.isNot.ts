import { stringValidator, ValidatorFunc } from '../stringValidator';

const create = (testFunc: ValidatorFunc): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return !stringValidator(value, [testFunc]);
    },
  });
};

export const isNot = (testFunc: ValidatorFunc) => {
  return create(testFunc);
};
