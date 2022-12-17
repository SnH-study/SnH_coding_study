const solution = (a, b) => {
  let arr = [];
  let range = [a, b].sort((a, b) => a - b);

  for (let i = range[0]; i <= range[1]; i++) {
    arr.push(i);
  }

  return arr.reduce((acc, cur) => acc + cur);
};
