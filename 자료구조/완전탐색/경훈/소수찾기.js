function solution(numbers) {
  let answer = 0;
  let numArr = numbers.split('');
  let nums = new Set();

  console.log(numArr);

  getPermutation(numArr, '');

  // 소수 판별
  function isPrimeNum(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 순열 만들기
  function getPermutation(a, s) {
    if (s.length > 0) {
      console.log('s : ', s);
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s));
        if (isPrimeNum(Number(s))) {
          answer++;
        }
      }
    }
    if (a.length > 0) {
      for (let i = 0; i < a.length; i++) {
        let t = a.slice(0);
        t.splice(i, 1);
        console.log('t : ', t);
        console.log('a[i] : ', a[i]);
        getPermutation(t, s + a[i]);
      }
    }
  }

  return answer;
}
