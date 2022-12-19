// 유클리드 호제법 참고

function solution(n, m) {
  let max = Math.max(n,m)
  let min = Math.min(n,m)
  
  if(max % min == 0) return [min, min * ((n*m)/min**2)]
  
  let a = cccFunc(max,min);
  return [a, a * ((n*m)/a**2)]
}

function cccFunc(max, min){
  return max % min == 0 ? min : cccFunc(min, max%min)
}