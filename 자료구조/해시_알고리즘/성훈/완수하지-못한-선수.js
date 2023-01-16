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

  return answer;
};
solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

// case 3, case 5 시간 초과 코드
// const solution = (participant, completion) => {
//   const map = new Map();
//   let max = Number.MIN_SAFE_INTEGER;
//   let answer = "";

//   for (let value of participant) {
//     if (map.has(value)) {
//       map.set(value, map.get(value) + 1);
//     } else {
//       map.set(value, +1);
//     }
//   }

//   for (let value of completion) {
//     if (map.has(value)) {
//       map.set(value, map.get(value) - 1);
//     }
//   }

//   for (let [key, value] of map) {
//     if (value > max) {
//       max = value;
//       answer = key;
//     }
//   }
//   return answer;
// };

// case 3, case 5 시간 초과 해결
// 아래와 같이 Map.set 부분을 if else 대신 OR 연산자로 수행
// for (let value of participant) {
//   map.set(value, map.get(value) + 1 || 1)
// }
