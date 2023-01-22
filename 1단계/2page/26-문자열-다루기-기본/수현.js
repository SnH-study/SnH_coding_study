const solution = (s) =>
  (s.length === 4 || s.length === 6) && !isNaN(s) && !s.includes('e')
    ? true
    : false;
