function solution(numbers) {
  let arr = numbers.sort((a, b) => b-a)
  return arr[0] * arr[1]
}