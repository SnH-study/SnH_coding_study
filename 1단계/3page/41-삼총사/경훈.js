function solution(number) {
  let count = 0;
  for(let i = 0; i<number.length; i++){
      for(let j = i+1; j<number.length; j++){
          for(let z = j+1; z<number.length; z++){
              if(number[i] + number[j] + number[z] == 0){
                count++  
              }
          }
      }
  }
  return count
}