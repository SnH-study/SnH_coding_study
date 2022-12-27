function solution(a, b) {
  const weekArr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  const day = new Date(2016, a-1, b)
  return weekArr[day.getDay()]
}