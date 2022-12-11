function solution(strlist) {
  let answer = strlist.map((i) => {
      return i.split('').length
  });
  return answer
}