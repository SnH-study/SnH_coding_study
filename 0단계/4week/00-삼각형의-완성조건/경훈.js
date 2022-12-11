function solution(sides) {
  let max = 0;
  for(let i =0; i<sides.length; i++){
      if(sides[i] < sides[i+1]) max = sides[i+1]
  }
  
  let sum = 0
  
  sides.map((i) => {
      if(i !== max) sum += i
  })
  
  if(max >= sum) return 2
  if(max < sum) return 1
}