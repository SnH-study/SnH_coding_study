function solution(s){
  let pc = 0;
  let yc = 0;
  s.toLowerCase().split('').map((i) => {
      if(i == "p") pc++;
      if(i == "y") yc++;
  })
  
  if(pc == yc) return true
  if(pc !== yc) return false
}