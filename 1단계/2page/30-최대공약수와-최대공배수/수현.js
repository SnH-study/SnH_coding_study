const solution = (n, m) => {
  let gcd = 1;
  let lcm = 1;
  let array = [];

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  lcm = (n * m) / gcd;

  array.push(gcd, lcm);
  return array;
};
