function solution(n) {
  let answer = [];
  let str = n + ''
  let array = str.split('').reverse()
  answer = array.map(item => parseInt(item))
  return answer;
}