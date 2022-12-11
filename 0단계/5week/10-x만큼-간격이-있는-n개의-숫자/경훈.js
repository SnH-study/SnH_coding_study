function solution(x, n) {
  let answer = []
  for(let i = 1; i<n+1; i++){
      answer.push(x*i)
  }
  return answer
}