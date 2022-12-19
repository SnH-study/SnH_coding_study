function solution(left, right) {
  let sum = 0;
  for(let i = left; i<right+1; i++){
      let count = 0;
      for(let j = 1; j<i+1; j++){
          if(i%j == 0) count++;
      }
      if(count % 2 == 0) sum+= i;
      if(count % 2 == 1) sum-= i;
  }
  return sum;
}