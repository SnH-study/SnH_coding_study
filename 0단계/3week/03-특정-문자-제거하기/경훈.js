function solution(my_string, letter) {
  return my_string.split('').map((i) => {
      if(i == letter) return i = ''
      else return i;
  }).join('')
}