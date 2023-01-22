function solution(phone_number) {
  let answer = ''
  let num = (phone_number.length -4)
  for (let i = 0 ; i<num ;i++ ){
      answer += '*'
  }
  let lastNum = phone_number.slice(-4)
  return answer+lastNum;
}