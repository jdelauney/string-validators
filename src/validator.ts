export interface IValidatorFunc {
  validate: (value: string) => boolean;
}

export type ValidatorFunc = IValidatorFunc;

export type Validators = IValidatorFunc[];

export const CHARSET_UPPER_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const CHARSET_LOWER_ALPHA = 'abcdefghijklmnopqrstuvwxyz';
export const CHARSET_NUMBER = '0123456789';
export const CHARSET_DECIMAL = ',.';
export const CHARSET_PUNCTUATION = ',，;.!！?？:"\'-”‘`';
export const CHARSET_MATHS_SIGN = '()（）[]{}=/*-+%°^<>~';
export const CHARSET_SPECIAL_CHARS = '~@&#$@€µ§\\|_—µ£￥……。、【】';
export const CHARSET_ACCENTED = 'àäâéèêëîïöôùûüç';
export const CHARSET_CRLF = '\r\n';
export const CHAR_SPACE = ' ';
export const CHAR_TAB = '\t';
export const CHARSET_ALL =
  CHARSET_UPPER_ALPHA + CHARSET_LOWER_ALPHA + CHARSET_NUMBER + CHARSET_ACCENTED + CHARSET_PUNCTUATION + CHARSET_MATHS_SIGN + CHARSET_SPECIAL_CHARS + CHAR_SPACE;

export const validator = (value: string, validators: Validators = []): boolean => {
  let isValid = true;
  if (validators.length === 0) {
    return true;
  }
  let index = 0;

  do {
    const validator: IValidatorFunc = validators[index];
    isValid = isValid && validator.validate(value);
    ++index;
  } while (isValid && index < validators.length);

  return isValid;
};
