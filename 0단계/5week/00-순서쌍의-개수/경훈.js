function solution(n) {
  let arr = []
  for(let i = 0; i<n+1; i++) {
      if(n % i == 0) arr.push(i);
  }
  return arr.length;
}