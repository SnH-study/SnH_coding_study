function solution(s) {
  return (s.length === 4 || s.length === 6) && s%1 === 0 && !s.includes('e')
}