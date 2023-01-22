const solution = (clothes) => {
  const map = new Map();
  let answer = 1;

  for (let value of clothes) {
    map.set(value[1], map.get(value[1]) + 1 || 1);
  }

  for (let [key, value] of map) {
    answer *= value + 1;
  }

  return answer - 1;
  // 스파이는 하루에 최소 한 개의 의상은 입기 때문에 아무것도 입지 않은 경우의 수는 빼준다.
};

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
// solution([
//   ["crow_mask", "face"],
//   ["blue_sunglasses", "face"],
//   ["smoky_makeup", "face"],
// ]);
