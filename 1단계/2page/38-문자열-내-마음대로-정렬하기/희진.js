function solution(strings, n) {
  var answer = strings.sort(
      (a,b) => {
      if (a[n] > b[n]){
          return 1
      } 
      if (a[n] < b[n]){
          return -1
      }
      else if (a[n] === b[n]){
          return a > b ? 1 : -1
      }
      }
  )
  return answer;
}