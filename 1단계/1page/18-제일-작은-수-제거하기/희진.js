function solution(arr) {
  let min = Math.min(...arr)
  let answer = arr.filter(item=> min < item)
  answer.length === 0 ? answer.push(-1) : answer
  return answer;
}