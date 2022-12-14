// function solution(n) {
//   let answer = 0;
//   // let compare = n + '';
//   let compare = n + '';

//   for (let i = 0; i < n.length; i++) {
//     answer += parseInt(compare.charAt(i));
//   }

//   return answer;
// }

function solution(n) {
  let answer = 0;
  let compare = n + '';

  for (let i = 0; i < compare.length; i++) {
    answer += parseInt(compare.charAt(i));
  }

  return answer;
}

// 처음에 for문 안에 length를 n.length로 둬서 계속 오류가 났다
// split.reduce 쓰는 방법이 깔끔해보인다
// 🌟 추후에 다시 풀어보기!
