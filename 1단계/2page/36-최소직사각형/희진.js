function solution(sizes) {    
  let w = []
  let h = []
  let arr = sizes.map((item)=> item.sort( ( a,b )=>a-b))
      for (let i = 0 ; i < arr.length ; i++){
          h.push(arr[i][0])
          w.push(arr[i][1])
  }
  
  return Math.max(...h)*Math.max(...w)
}