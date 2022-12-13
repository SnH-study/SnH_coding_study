function solution(arr, divisor) {
  let answer = []
  arr.map((i) => {
      if(i%divisor == 0) answer.push(i)
  })
  
  return answer.length !== 0 ? answer.sort((a, b) => a-b) : [-1];
}