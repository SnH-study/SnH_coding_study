function solution(n) {
  let arr = []
  for(let i = 0; i<n+1; i++){
      if(i%2 == 1) arr.push(i)
  }
  return arr;
}