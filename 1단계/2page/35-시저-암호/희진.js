function solution(s, n) {
  let arr = []
  for (let i = 0 ; i < s.length ; i++){
      if ((65 <= s.charCodeAt(i)+n && s.charCodeAt(i)+n <=90) || (97 <= s.charCodeAt(i)+n && s.charCodeAt(i)+n <= 122)){
          // console.log(s.charCodeAt(i)+n)
          arr.push(s.charCodeAt(i) + n)
          // console.log('arr1',arr)
      } if(s.charCodeAt(i) == 32){
           arr.push(s.charCodeAt(i))
          // console.log('arr2',arr)
      } if ( (s.charCodeAt(i) > 90 && s.charCodeAt(i) < 97) || s.charCodeAt(i)+n > 122 ){
          // console.log('3 i?',s.charCodeAt(i))
          arr.push(s.charCodeAt(i) + n -1 - 25)
          // console.log('if3 +n -25',s.charCodeAt(i)+n - 25)
          // console.log('arr3',arr)
      }
  }
          
         let answer = String.fromCodePoint(...arr)
  return answer
}

//test case 5번 부터 실패 ... 나중에 재시도 예정