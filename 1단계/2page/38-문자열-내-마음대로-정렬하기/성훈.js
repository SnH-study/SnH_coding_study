const solution = (strings, n) => {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });
};
solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);
