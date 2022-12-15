function solution(x) {
  var answer = true;
  let str = x+''
  let array = str.split('').map(item=>+item)
  let sum = 0 ;
  
  for ( let i = 0 ; i < array.length ; i++){
      sum += array[i]
  }
  
  console.log(array)
  return x % sum === 0 ? true : false;

}