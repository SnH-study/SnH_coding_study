const solution = (s) => {
테스트케이스 2 실패
효율성 테스트 1, 2 시간초과

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

const solution2 = (s) => {
  // 효율성 테스트 1, 2 시간초과
  let answer = true;
  const stack = [];

  for (let value of s) {
    if (value === "(") {
      stack.push(value);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length > 0 ? false : true;
};

solution("()()");
solution("(()(");
