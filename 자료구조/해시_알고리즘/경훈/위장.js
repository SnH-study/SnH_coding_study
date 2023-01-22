function solution(clothes) {
  const obj = {};

  for (let arr of clothes) {
    obj[arr[1]] = (obj[arr[1]] || 0) + 1;
  }

  let sum = 1;

  for (let i in obj) {
    sum *= obj[i] + 1;
  }

  return sum - 1;
}
