export const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

export const isOdd = (n: number): boolean => {
  return !isEven(n);
};
