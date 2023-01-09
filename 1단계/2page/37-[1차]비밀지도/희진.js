function solution(n, arr1, arr2) {
  let arr1_2 = arr1.map(item => item.toString(2))
  let arr2_2 = arr2.map(item => item.toString(2))
  
  let test = []
  
  let answer = arr1_2.map(item => {
      // arr2_2.map(item2 => item2)
      for (let i = 0 ; i < arr2_2.length ; i++) {
          for(let j = 0 ; j < arr2_2[i].length ; j++){
          if ( arr2_2[i][j] == item[i][j] == 0 ){
          test.push(' ')   
          } else {
          test.push('#') }   
          }
      }
  }
                          )
  return test
}

// 위 ) 첫번째 시도 미완성 풀이

// 아래 ) 두번째 시도 정답 


function solution(n, arr1, arr2) {
  let arr1_2 = arr1.map(item =>{ 
    if(item.toString(2).length < n){
    return '0'.repeat(n-item.toString(2).length)+item.toString(2)  
    }else {
        return item.toString(2)
    }
  })
  
  let arr2_2 = arr2.map(item =>{ 
    if(item.toString(2).length < n){
    return '0'.repeat(n-item.toString(2).length)+item.toString(2)  
    }else {
        return item.toString(2)
    }
  })
  
  console.log('arr1_2',arr1_2)
  console.log('arr2_2',arr2_2)
  
  let test = []
  
  for (let i = 0 ; i < n ; i++) {
      for(let j = 0 ; j < n ; j++) {
          (arr2_2[i][j] | arr1_2[i][j]) ? test.push('#') : test.push(' ')
      }
      test.push(0)
  }
  
  return test.join('').split('0').slice(0,-1)
}