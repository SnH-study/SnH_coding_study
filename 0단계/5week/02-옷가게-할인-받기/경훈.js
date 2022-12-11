function solution(price) {
  if(price >= 500000) return parseInt(price * 0.8)
  if(price >= 300000) return parseInt(price * 0.9)
  if(price >= 100000) return parseInt(price * 0.95)
  if(price < 100000) return price
}