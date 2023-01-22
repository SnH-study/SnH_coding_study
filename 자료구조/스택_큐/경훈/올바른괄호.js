function solution(s) {
  let arr = s.split("");

  if (arr.length % 2 !== 0) return false;
  if (arr[0] == ")") return false;
  if (arr[arr.length] == "(") return false;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] == "(" ? count++ : count--;
    if (count < 0) return false;
  }

  return count == 0 ? true : false;
}
