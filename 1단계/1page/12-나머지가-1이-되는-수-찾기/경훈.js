function solution(n) {
  let arr = []
  for(i = 0; i<n+1; i++){
      if(n%i == 1) arr.push(i) 
  }
  return arr[0];
}