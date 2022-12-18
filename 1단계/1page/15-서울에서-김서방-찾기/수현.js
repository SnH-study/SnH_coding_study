const solution = (seoul) => {
  let index = [...seoul].findIndex((n) => n === 'Kim');
  return `김서방은 ${index}에 있다`;
};
