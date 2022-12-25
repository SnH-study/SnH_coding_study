const solution = (n) => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push('수');
    } else {
      arr.push('박');
    }
  }
  return arr.join('');
};
