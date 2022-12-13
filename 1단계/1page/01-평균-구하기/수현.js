function solution(arr) {
  let answer = 0;

  answer = arr.reduce((acc, current) => acc + current) / arr.length;
  return answer;
}
