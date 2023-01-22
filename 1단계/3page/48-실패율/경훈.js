function solution(N, stages) {
  const arr = stages.sort();
  console.log(arr);

  const result = {};
  arr.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });

  console.log(result);
}
