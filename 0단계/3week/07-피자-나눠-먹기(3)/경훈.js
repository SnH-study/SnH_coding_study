function solution(slice, n) {
  if(parseInt(n % slice) == 0) return n/slice
  if(parseInt(n % slice) !== 0) return parseInt(n/slice) + 1
}