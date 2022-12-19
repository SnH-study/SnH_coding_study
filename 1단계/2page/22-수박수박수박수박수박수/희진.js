function solution(n) {
  var answer = [];
  for(let i = 0 ; i < n ; i++){
      i%2===0 ? answer.push('수') : answer.push('박') 
  }
  return answer.join('');
}