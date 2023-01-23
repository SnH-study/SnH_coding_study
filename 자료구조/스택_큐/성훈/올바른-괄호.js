const solution = (s) => {
  const stack = [];
  const sArr = s.split("");

  sArr.forEach((value) => {
    if (value === "(") {
      stack.push(value);
    } else if (value === ")") {
      stack.pop();
    }
  });

  return stack.length === 0 ? true : false;
};

// 테스트케이스 2 실패
// 효율성 테스트 1, 2 시간초과
