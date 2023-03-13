function solution(word) {
  let arr = word.split('').map((i) => {
    switch (i) {
      case 'A':
        return 0;
      case 'E':
        return 1;
      case 'I':
        return 2;
      case 'O':
        return 3;
      case 'U':
        return 4;
      default:
        break;
    }
  });
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {}
}
