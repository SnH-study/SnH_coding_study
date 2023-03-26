// 코드 추후 Perf (급하게 품)
function solution(word) {
  // AAAAA -> AAAAE = 1
  // AAAA -> AAAE = 6
  // AAA -> AAE = 31
  // AA -> AE = 156
  // A -> E = 781
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

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      switch (arr[i]) {
        case 0:
          sum += 1;
          break;
        case 1:
          sum += 781 * 1 + 1;
          break;
        case 2:
          sum += 781 * 2 + 1;
          break;
        case 3:
          sum += 781 * 3 + 1;
          break;
        case 4:
          sum += 781 * 4 + 1;
          break;
      }
    } else if (i === 1) {
      switch (arr[i]) {
        case 0:
          sum += 1;
          break;
        case 1:
          sum += 156 * 1 + 1;
          break;
        case 2:
          sum += 156 * 2 + 1;
          break;
        case 3:
          sum += 156 * 3 + 1;
          break;
        case 4:
          sum += 156 * 4 + 1;
          break;
      }
    } else if (i === 2) {
      switch (arr[i]) {
        case 0:
          sum += 1;
          break;
        case 1:
          sum += 31 * 1 + 1;
          break;
        case 2:
          sum += 31 * 2 + 1;
          break;
        case 3:
          sum += 31 * 3 + 1;
          break;
        case 4:
          sum += 31 * 4 + 1;
          break;
      }
    } else if (i === 3) {
      switch (arr[i]) {
        case 0:
          sum += 1;
          break;
        case 1:
          sum += 6 * 1 + 1;
          break;
        case 2:
          sum += 6 * 2 + 1;
          break;
        case 3:
          sum += 6 * 3 + 1;
          break;
        case 4:
          sum += 6 * 4 + 1;
          break;
      }
    } else if (i === 4) {
      switch (arr[i]) {
        case 0:
          sum += 1;
          break;
        case 1:
          sum += 1 * 1 + 1;
          break;
        case 2:
          sum += 1 * 2 + 1;
          break;
        case 3:
          sum += 1 * 3 + 1;
          break;
        case 4:
          sum += 1 * 4 + 1;
          break;
      }
    }
  }

  return sum;
}

function solution(word) {
  let wordArr = word.split('');

  let answer = wordArr.reduce(
    (r, c, i) =>
      r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1,
    0
  );

  return answer;
}
