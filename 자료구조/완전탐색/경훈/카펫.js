function solution(brown, yellow) {
  for (let i = 3; i < brown; i++) {
    for (let j = 3; j < brown; j++) {
      if (i >= j && i * j == brown + yellow && (i - 2) * (j - 2) == yellow) {
        return [i, j];
      }
    }
  }
}
