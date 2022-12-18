const solution = (arr) => {
  let copyArr = [...arr];
  let [min] = copyArr.sort((a, b) => a - b).splice(0, 1);

  arr = arr.filter((n) => n !== min);
  console.log(arr);

  if (arr.length === 0) {
    return [-1];
  } else {
    return arr;
  }
};
