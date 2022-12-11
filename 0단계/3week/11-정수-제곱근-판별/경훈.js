function solution(n) {
  if(n % Math.sqrt(n) == 0) return (Math.sqrt(n)+1)**2
  if(n % Math.sqrt(n) !== 0) return -1
}