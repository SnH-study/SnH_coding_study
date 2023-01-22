function solution(participant, completion) {
    
  let obj = {};
  for ( let i of participant){
      obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  
  for (let i of completion){
      obj[i] -= 1
      if (obj[i] === 0) delete(obj[i])
  }
  
  return Object.keys(obj)[0];
}