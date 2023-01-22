function solution(x, n) {
  let y = x
  var answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(y)
    y += x

  }
  return answer;
}