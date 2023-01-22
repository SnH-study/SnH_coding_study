function solution(s) {
  let answer = true
  let count = 0
  let arr = s.split('')

  for (let i = 0; i < arr.length; i++) {
    arr[i].includes("(") ? count++ : count--
    if (count < 0) {
      return false;
    }
  }

  if (arr[0] !== '(' || arr[arr.length - 1] !== ')' || arr.length % 2 !== 0) return false

  return answer;
}

//효율성 2번 실패 ㅠㅠ 