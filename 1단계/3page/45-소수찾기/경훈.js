function solution(n) {
  let arr = Array(n+1).fill(true);
  
  for(let i=2; i<=n; i++){
      if(arr[i]){
          for(let j=2; j<=n/i; j++){
              arr[i*j] = false
          }
      }
  }
  
  return arr.filter(k => k == true).length-2
}