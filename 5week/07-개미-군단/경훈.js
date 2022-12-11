function solution(hp) {
  let parse = hp
  let num1 = parseInt(hp / 5)
  parse = hp % 5
  if(parse == 0) return num1;
  let num2 = parseInt(parse / 3)
  parse %= 3
  if(parse == 0) return num1+num2   
  let num3 = parseInt(parse / 1)
  parse %= 1
  if(parse == 0) return num1+num2+num3
}

function solution(hp) {
  return (Math.floor(hp/5) + Math.floor((hp%5)/3) + Math.floor(((hp%5)%3)/1))
}