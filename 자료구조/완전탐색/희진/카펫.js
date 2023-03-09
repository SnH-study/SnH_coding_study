function solution1(brown, yellow) {
  let hap = brown + yellow
  let max = Math.max(brown,yellow)
  for(let i = 1; i < max ; i++){
      for (let j = 1; j < max ; j++){
          if((i>=j)&&(i*j == hap)&&((i-2)*(j-2)==yellow)){
              return[i,j]
          }
      }
  }
}


function solution2(brown, yellow) {
  for (let i = 3; i <= (brown+yellow)/i; i++) {
      let x = Math.floor((brown+yellow)/i);
      if( (x-2)*(i-2)=== yellow) {
          return [x,i];
      }
  }
}