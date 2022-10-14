export const strLeftOf = (value: string, searchStr: string, startPos = 0): string => {
  const pos = value.indexOf(searchStr, startPos);
  if (pos < 0) {
    return '';
  }
  return value.slice(0, pos);
};

export const strRightOf = (value: string, searchStr: string, startPos = 0): string => {
  const pos = value.indexOf(searchStr, startPos);
  if (pos >= value.length - 1) {
    return '';
  }
  return value.slice(pos + 1, value.length);
};

export const strRemoveLineBreaks = (value: string): string => {
  return value.replace(/(\r\n|\n|\r)/gm, '');
};

export const strReplaceAccentChars = (value: string): string => {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
