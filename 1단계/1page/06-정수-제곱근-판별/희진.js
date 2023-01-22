function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n / i === i && n % i === 0) {
      answer = (i + 1) * (i + 1); break;
    } else { answer = -1 }
  }
  return answer;
}