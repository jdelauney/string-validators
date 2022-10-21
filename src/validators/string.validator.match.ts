import { ValidatorFunc } from '../validator';

const create = (expression: RegExp): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return expression.test(value);
    },
  });
};

export const match = (expression: RegExp) => {
  return create(expression);
};
