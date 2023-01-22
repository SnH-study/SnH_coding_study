function solution(s) {
  if(s.length % 2 == 0)
      return s.split('').slice(s.length/2-1, s.length/2+1).join('') 
  else return s.split('').slice(s.length/2, s.length/2+1).join('') 
}