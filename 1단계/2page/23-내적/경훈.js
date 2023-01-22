function solution(a, b) {
  let count = 0;
  let sum = 0
  a.map((i) => {
      sum += (i * b[count])
      count++;
  })
  return sum;
}

function solution(a, b) {
  return a.reduce((i,x,z) => i += x * b[z] , 0)
}