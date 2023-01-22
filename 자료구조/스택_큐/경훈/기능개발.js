function solution(progresses, speeds) {
  let arr = [];
  let answer = [];
  for (let i = 0; i < progresses.length; i++) {
    arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let max = arr[0];
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (max < arr[j]) {
      max = arr[j];
      answer.push(count);
      count = 1;
    } else {
      count++;
    }

    if (j == arr.length - 1) answer.push(count);
  }

  return answer;
}
