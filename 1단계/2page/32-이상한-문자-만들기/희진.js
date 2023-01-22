function solution(s) {
  let str = s.split(' ')
  let answer = []
  
  for ( let w of str ){
      let word = w.split('').map((v,i) => i%2===0 ? v.toUpperCase() : v.toLowerCase()).join('')
      answer.push(word)
  }
  return answer.join(' ');
}