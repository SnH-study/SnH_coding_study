function solution(money) {
  let n = parseInt(money / 5500)
  let lastMoney = money % 5500
  let answer = []
  answer.push(n, lastMoney)
  return answer;
}