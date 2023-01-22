function solution(x) {
  let sum = x
    .toString()
    .split('')
    .map((n) => n * 1)
    .reduce((acc, cur) => acc + cur);

  let answer = x % sum === 0 ? true : false;
  return answer;
}
