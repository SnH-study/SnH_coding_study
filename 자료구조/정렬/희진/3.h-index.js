function solution(citations) {
  var answer = 0;
  let sort = citations.sort((a,b)=> b-a)
  for (let i = 0 ; i < sort.length ; i++){
      if (i < sort[i]) answer ++;
  }
  return answer;
}