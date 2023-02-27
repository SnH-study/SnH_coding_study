function solution(answers) {
  let person1 = '12345'.repeat(parseInt(answers.length / 5)+1).split('')
  let person2 = '21232425'.repeat(parseInt(answers.length / 8)+1).split('')
  let person3 = '3311224455'.repeat(parseInt(answers.length / 10)+1).split('')
  let answer = []
  
  console.log('repeat length',person1.length)
  console.log('repeat',person1)
  
  let supo1 = answers.filter((v,i) => v == person1[i] ).length
  let supo2 = answers.filter((v,i) => v == person2[i] ).length
  let supo3 = answers.filter((v,i) => v == person3[i] ).length
  
  let arr = [supo1, supo2, supo3]
  const max = Math.max(...arr)
  
  for ( let i = 0 ; i < arr.length ; i++){
      if( max === arr[i]){
          answer.push(i+1)
      }
  }
  
  answer.sort((a,b)=>a-b)
  
  return answer;
}