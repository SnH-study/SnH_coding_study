const solution = (numbers) => {
  let sum = 0;
  for (let i = 0; i <= 9; i++) {
    sum += i;
  }
  return sum - numbers.reduce((acc, cur) => acc + cur);
};
