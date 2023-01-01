const solution = (n) => {
  let num = n.toString(3).split('').reverse().join('');
  num = parseInt(num, 3);
  return num;
};
