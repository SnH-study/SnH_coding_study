function solution(my_string) {
  let sum = 0
  my_string.toLowerCase().replace(/[a-z]/g, '').split('').map(i => sum += Number(i));
  return sum
}