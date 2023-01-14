const solution = (nums) => {
  const map = new Map();
  const set = new Set();
  nums.map((_, idx) => {
    map.set(idx, _);
  });
  for (let value of map.values()) {
    set.add(value);
  }
  return set.size > nums.length / 2 ? nums.length / 2 : set.size;
};

solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
