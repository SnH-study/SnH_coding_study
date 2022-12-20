// const solution = (absolutes, signs) => {
//   let minus = signs
//     .map((n, idx) => {
//       if (!n) return idx;
//     })
//     .filter((n) => !isNaN(n));

//   let sum = 0;

//   for (let i = 0; i < absolutes.length; i++) {
//     if (i === minus[i]) {
//       sum += absolutes[i] * -1;
//     } else {
//       sum += absolutes[i];
//     }
//   }
//   return sum;
// };

const solution = (absolutes, signs) => {
  let minus = signs.map((n, idx) => {
    if (!n) return idx;
  });
  //.filter((n) => !isNaN(n));

  return absolutes.reduce((acc, cur, i) => {
    if (!isNaN(minus[i])) {
      return (acc += cur * -1);
    } else {
      return (acc += cur);
    }
  }, 0);
};
