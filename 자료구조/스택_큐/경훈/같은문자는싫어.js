function solution(arr) {
  let a = [];
  arr.map((c, i) => {
    if (c !== arr[i + 1]) a.push(c);
  });
  return a;
}
