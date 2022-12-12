function solution(x) {
  let sum = 0;
  (x+'').split('').map(i => sum+=Number(i))
  return x%sum == 0 ? true : false
}