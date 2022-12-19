function solution(price, money, count) {
  let sum = 0;
  for(let i = 1; i<count+1; i++){
      sum += i*price
  }

  return money-sum >= 0 ? 0 : -(money-sum)
}