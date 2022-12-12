function solution(n) {
  return Number((n+'').split('').map(i => Number(i)).sort((a,b) => b-a).join(''));
}