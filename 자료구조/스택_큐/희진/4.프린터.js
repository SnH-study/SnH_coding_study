function solution(priorities, location) {
  var answer = 0;
  let count = 0;
  let arr = priorities.map((v,i)=>([v,i]))
  let stack = [...arr]
  let test = []
  // let list = priorities.filter((v,i)=> i === location)
  // list.push(location)
  // console.log('list',list)
  
  for (let i = 0; i < priorities.length ;i++){
      if(stack[i] >= stack[i+1]){
      console.log('통과',stack[i])
      test.push(stack[i])
       }
      for (let j = i ; j < priorities.length-1 ; j++){   
       if(stack[i][0] < stack[j+1][0]){
          console.log(stack[i][0] , stack[j+1][0])
          console.log('push',stack[i])
          stack.push(stack[i])
          console.log('푸시 후',stack)
          stack.shift()
          console.log('시프트후',stack)
           break;
       }
      }
  }
  
  console.log('stack',stack)
  console.log('test',test)
 answer = stack.findIndex(e => e[1] == location)
  
   return answer;
}

// 두시간넘게 도전했지만... 해결이안돼서 일단 다른걸루 넘어가겠습니다... 
