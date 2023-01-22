const solution = (d, budget) => {
  let sum = 0;
  let answer = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    answer++;

    if (sum > budget) {
      answer--;
    }
  }
  return answer;
};
