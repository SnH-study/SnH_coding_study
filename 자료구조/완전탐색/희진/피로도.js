function solution(k, dungeons) {
  let answer = 0
  let 피로도 = k
  
  dungeons.sort((a,b)=> {
  if (a[0] > b[0]){
        return -1
      } 
  if (a[0] < b[0]){
        return 1
      }
  else if (a[0] === b[0]){
        return a[1] > b[1] ? 1 : -1
      }
  })
  
  console.log('던전',dungeons)
  
  for (let i = 0; i < dungeons.length; i++){
      console.log('i',dungeons[i])
      if (dungeons[i][0] <= 피로도){
          console.log('방문해따',dungeons[i])
          피로도 = 피로도 - dungeons[i][1]
          console.log('현재피로도는??',피로도)
          answer ++
          console.log('몇개?',answer)
      } else break;
      // answer ++
  }
  
  console.log(dungeons)
  
  return answer;
}

//