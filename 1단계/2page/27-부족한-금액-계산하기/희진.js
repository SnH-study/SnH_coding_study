function solution(price, money, count) {
  let answer =  (price*(count+1))*count/2 - money
  return answer > 0 ? answer : 0;
}

// function solution(price, money, count) {
//   var answer = 0;
//   money > (price*(count+1))*count/2 ? answer = 0 : answer = (price*(count+1))*count/2 - money
//   return answer
// }