const solution = (participant, completion) => {
  const map = new Map();
  let answer = "";

  for (let value of participant) {
    map.set(value, map.get(value) + 1 || 1);
  }

  for (let value of completion) {
    if (map.get(value) === 1) {
      map.delete(value);
    } else {
      map.set(value, map.get(value) - 1);
    }
  }

  for (let [key, _] of map) {
    answer = key;
  }

  // console.log(answer);
  return answer;
};
solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
