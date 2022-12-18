const solution = (arr, divisor) => {
  let list = arr.filter((n) => n % divisor === 0);

  if (list.length === 0) {
    return [-1];
  } else {
    return list.sort((a, b) => a - b);
  }
};
