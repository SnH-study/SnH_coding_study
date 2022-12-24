function solution(n) {
  let reversThree = n.toString(3).split('').reverse().join('')
  return parseInt(reversThree,3);
}