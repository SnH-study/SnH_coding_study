const solution = (s) => {
  let array = s.split('');
  if (s.length % 2 !== 0) {
    return array[Math.floor(s.length / 2)];
  } else {
    return array.splice(s.length / 2 - 1, 2).join('');
  }
};
