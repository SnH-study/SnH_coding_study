function solution(numbers) {
  let test = numbers.map(item => item.toString())
  let sort = test.sort((a,b)=>(b+a) - (a+b))
  return sort[0] === '0' ? '0' : sort.join('');
}