const solution = (num1, num2) =>
  num1 % num2 === 0 ? num1 / num2 : (num1 - (num1 % num2)) / num2;
