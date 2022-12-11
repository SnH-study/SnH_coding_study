const solution = (n, k) =>
  Math.floor(n / 10) > 0
    ? 12000 * n + 2000 * (k - Math.floor(n / 10))
    : 12000 * n + 2000 * k;
