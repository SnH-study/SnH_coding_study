function solution(numbers) {
  let answer = 0;
  let array = [0,1,2,3,4,5,6,7,8,9];
  array.filter(x=>!numbers.includes(x)).filter(x=> answer+= +x)
  return answer;
}