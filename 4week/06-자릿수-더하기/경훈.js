function solution(n) {
  let sum = 0
  let str = n+''
  str.split('').map(i => sum+= Number(i))
  return sum
}