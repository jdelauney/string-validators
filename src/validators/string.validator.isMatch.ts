import { ValidatorFunc } from '../stringValidator';

const create = (expression: RegExp): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return expression.test(value);
    },
  });
};

export const isMatch = (expression: RegExp) => {
  return create(expression);
};
