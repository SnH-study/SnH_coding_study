function solution(s) {
  let array = s.split('')
  let countP = 0;
  let countY = 0;

  for (let i = 0; i < array.length; i++) {
    if ((array[i] == 'p') || (array[i] == 'P')) {
      console.log(array[i])
      countP++
    }
    else if ((array[i] == 'y') || (array[i] == 'Y')) {
      console.log(array[i])
      countY++
    }

  }
  let answer = countP === countY ? true : false

  return answer;
}