function solution(array, n) {
  let answer = 0;

  answer = array.filter((arr) => arr === n).length;

  return answer;
}
