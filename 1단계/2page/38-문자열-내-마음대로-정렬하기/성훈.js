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

// sort(a - b) a: next item, b: previous item
// a - b 결과가 양수이면 자리바꿈(a가 먼저) 음수이면 자리 안 바꿈(b가 먼저)
