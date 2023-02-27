const solution = (priorities, location) => {
  let list = priorities.map((v, i) => {
    return {
      myReqDoc: i === location,
      value: v,
    };
  });

  let count = 0;
  while (true) {
    let currentShift = list.shift();
    if (list.some((e) => e.value > currentShift.value)) {
      list.push(currentShift);
    } else {
      count++;
      if (currentShift.myReqDoc) return count;
    }
  }
};
solution([2, 1, 3, 2], 2); // 1
//solution([1, 1, 9, 1, 1, 1], 0); // 5
