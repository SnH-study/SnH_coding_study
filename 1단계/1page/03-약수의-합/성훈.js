const solution = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
  return result;
};
