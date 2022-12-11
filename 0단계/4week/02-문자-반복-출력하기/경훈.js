function solution(my_string, n) {
  return my_string.split('').map(i => i.repeat(n)).join('')
}