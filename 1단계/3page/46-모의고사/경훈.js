function solution(answers) {
  const a = [1,2,3,4,5]
  const b = [2,1,2,3,2,4,2,5]
  const c = [3,3,1,1,2,2,4,4,5,5]
  
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for(let i = 0; i<answers.length; i++){
      if(answers[i] == a[i%5]) count1++;
      if(answers[i] == b[i%8]) count2++;
      if(answers[i] == c[i%10]) count3++;
  }
  
  let answer = []
  const arr = [count1, count2, count3]
  const max = Math.max(...arr);
  
  for(let j = 0; j<3; j++){
      if(max == arr[j]) answer.push(j+1)
  }
  
  return answer.sort((a,b)=>a-b)
}