function solution(arr) {
  arr.sort((a,b) => b-a).pop()
  return arr.sort((a,b) => b-a).length == 0 ? [-1] : arr.sort((a,b) => b-a);
}

// 이거 왜 안되는거야~~~~