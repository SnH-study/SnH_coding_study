function solution(brown, yellow) {
  let hap = brown + yellow
  let max = Math.max(brown,yellow)
  for(let i = 1; i < max ; i++){
      for (let j = 1; j < max ; j++){
          if((hap%(i*j) == 0 )&&(i>=j)&&(i*j == hap)&&((i-2)*(j-2)==yellow)){
              return[i,j]
          }
      }
  }
}