function solution1(s) {
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
// 1번코드 효율성 2번 실패

function solution2(s){
  let count = 0
  let arr = s.split('')
  
// if (arr[0] !== '(' || arr[arr.length-1] !== ')' || arr.length % 2 !== 0 ) return false
 
 for (let i = 0 ; i < arr.length ; i++ ){
  count +=  (arr[i] == '(' ? +1 : -1)
  if (count < 0) {
  return false;   
  }
 } 

  return count == 0;
}