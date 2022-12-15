function solution(s) {
  let answer = true;
  let array = s.toUpperCase().split('');

  let countP = 0;
  let countY = 0;
  array.map((n) => {
    if (n === 'P') countP++;
  });
  array.map((n) => {
    if (n === 'Y') countY++;
  });

  answer = countP === countY ? true : false;
  return answer;
}
