const solution = (n) =>
  n
    .toString()
    .split('')
    .map((n) => n * 1)
    .sort((a, b) => b - a)
    .join('') * 1;
