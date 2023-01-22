function solution(n) {
  let str = n + ''
  let array = str.split('')
  let answer = 0
  array.map(item => answer += parseInt(item))

  return answer;
}