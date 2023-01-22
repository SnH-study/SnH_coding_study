function solution(left, right) {
  let i = left;
  let answer = 0 ;
  let 약수 = 0 ;
  while (left <= i && i <= right ){
      for(let j = 1 ; j <= i ; j++){
          i%j===0 ? 약수++ : ''
          // console.log('i,약수',i,약수)
      }
  // console.log(`${i}의약수${약수}`)
  약수%2===0 ? answer += i : answer -= i
  i++
  약수 = 0;
  }
  return answer;
}