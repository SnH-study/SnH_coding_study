function solution(arr1, arr2) {
  let arr = []
  for(let i = 0; i<arr1.length; i++){
      let pushArr = []
      for(let j = 0; j<arr1[i].length; j++){
          pushArr.push(arr1[i][j] + arr2[i][j])
      }
      arr.push(pushArr)
  }
  return arr
}

// map 중복 사용
function solution(arr1, arr2) {
  return arr1.map((x, index) => x.map((y, i) => y + arr2[index][i]))
}

// arr1 [[1,2],[2,3]]
// arr2 [[3,4],[5,6]]

/*
map의 첫번째 인자는 currnet data 두번째 인자는 index 값
*/