const solution = (progresses, speeds) => {
  const answer = [0];
  const countDay = progresses.map((value, idx) => {
    return Math.ceil((100 - value) / speeds[idx]);
  });
  let currentMaxDay = countDay[0];

  for (let i = 0, j = 0; i < countDay.length; i++) {
    if (countDay[i] <= currentMaxDay) {
      answer[j] += 1;
    } else {
      currentMaxDay = countDay[i];
      answer[++j] = 1;
    }
  }

  return answer;
};

solution([93, 30, 55], [1, 30, 5]); // expected result : [2, 1]
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); // expected result : [(1, 3, 2)]
