function solution(num) {
  var answer = 0;
  while ( num != 1 && answer < 500) {
  if (num%2 === 0 ) {
      num /= 2 ;
      answer ++;
      console.log('짝수',answer,num)
  }
  else {
      num = (num * 3) + 1;
      answer ++;
      console.log('홀수',answer,num)
      
      }
  }
  return answer<500? answer : -1;
}