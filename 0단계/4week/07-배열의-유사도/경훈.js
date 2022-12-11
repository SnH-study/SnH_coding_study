function solution(s1, s2) {
  let count = 0;
  s1.map((i) => {
      s2.map((j) => {
          if(i == j) count++
      })
  })
  return count;
}