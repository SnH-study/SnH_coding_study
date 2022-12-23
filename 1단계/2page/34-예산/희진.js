function solution(d, budget) {
  let sum = 0;
  let count = 0
  
  let arr = d.sort((a,b) => a-b)
  arr.forEach(item=> { 
      if(sum+item <= budget) 
  { sum += item
    count ++
  }
})
  
  return count;
}