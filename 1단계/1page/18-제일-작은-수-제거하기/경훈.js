function solution(arr) {
  let min = Math.min(...arr)
  arr.splice(arr.indexOf(min), 1);
  if(arr.length == 0) return [-1]
  return arr
}