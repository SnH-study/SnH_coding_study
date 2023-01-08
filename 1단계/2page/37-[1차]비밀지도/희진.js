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
  
  
  // let test = answer.map(item => item.replaceAll(0,' ').replaceAll(1,'#'))
//     .replaceAll(0,' ').replaceAll(1,'#')
  return test
}