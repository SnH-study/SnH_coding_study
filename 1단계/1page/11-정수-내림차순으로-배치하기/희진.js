function solution(n) {
  let str = n+''
  let array = str.split('').sort((a,b)=>b-a).map(item=>+item).join('')
  return +array;
}