function solution(clothes) {
  let mul = 1;
  let set = new Set()
  let obj = {}
  
  for (let i of clothes){
    obj[i[1]] =  obj[i[1]] ?  obj[i[1]] +1 : 1 ;
    set.add(i[1])
  }

  for (let i = 0; i < set.size ; i++){
        let num = Object.values(obj)[i]+1
        mul *= num
      
  }
  
  return mul-1
}

// 경우의수를 사용안하는거까지 각 +1 해서 곱한후 -1 