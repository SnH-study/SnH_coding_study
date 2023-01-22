// function solution(n) {
//   const numbers = n.toString();
//   let answer = numbers.split('').reverse();
//   return answer;
// }
// 처음에 이렇게 했다가 ['5', '4', '3', '2', '1'] 이렇게 나와서 [5, 4, 3, 2, 1] 어떻게 이렇게 나올까 고민함

// function solution(n) {
//   const numbers = n.toString();
//   let answer = numbers
//     .split('')
//     .map((n) => n * 1)
//     .reverse();
//   return answer;
// }

const solution = (n) =>
  n
    .toString()
    .split('')
    .map((n) => n * 1)
    .reverse();
