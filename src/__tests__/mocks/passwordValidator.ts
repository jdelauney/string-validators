import {
  CHARSET_ACCENTED,
  CHARSET_LOWER_ALPHA,
  CHARSET_MATHS_SIGN,
  CHARSET_NUMBER,
  CHARSET_PUNCTUATION,
  CHARSET_SPECIAL_CHARS,
  CHARSET_UPPER_ALPHA,
  validator,
} from '../../validator';

import { isEmpty, not, minLength, containsOneOfCharsMinCount } from '../../validators';

export const isValidStrongPassword = async (password: string): Promise<boolean> => {
  password = password.trim();
  return validator(password, [
    not(isEmpty()),
    minLength(12),
    containsOneOfCharsMinCount(CHARSET_LOWER_ALPHA + CHARSET_ACCENTED, 4),
    containsOneOfCharsMinCount(CHARSET_UPPER_ALPHA, 3),
    containsOneOfCharsMinCount(CHARSET_NUMBER, 3),
    containsOneOfCharsMinCount(CHARSET_PUNCTUATION + CHARSET_MATHS_SIGN + CHARSET_SPECIAL_CHARS, 2),
  ]);
};
