function solution(array) {
  let arr = array.sort((a, b) => a-b)
  return arr[parseInt(arr.length/2)]
}