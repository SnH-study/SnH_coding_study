const solution = (arr) => {
  let result = 0;
  arr.map((value) => {
    result += value;
  });
  // console.log(result / arr.length);
  return result / arr.length;
};

solution([1, 2, 3, 4]);
