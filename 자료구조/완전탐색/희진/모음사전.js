// 첫번째 시도
function listUp (world, depth){
  let count = 0
  let arr = ['A','E','I','O','U']
  for (let i = 0 ; i < arr.length ; i++ ){
      let copyArr = [...arr];
    copyArr.splice(i, 1);
      console.log('gg')
      console.log('test',copyArr)
      depth =  arr[i]
      console.log('depth',depth)
      for( let j = 0 ; j < arr.length ; j++){
      console.log('안 i',arr[i].repeat(j+1))
      count++
      console.log('count',count)
      }
      for ( let j = arr.length-1 ; j > 0 ; j -- ){
          for ( let k = 0 ; k < arr.length-1 ; k++){
              console.log('반복',arr[i].repeat(j)+copyArr[k])
                  count++
              
          }
          
      }
      // console.log('밖 반대로',arr[i].repeat(arr.length - i - 1))
      // console.log('계산',arr.length - i - 1)
      // console.log('밖',arr[i+1]+''.repeat(i+1))
  }
}

// 두번째 시도

function listUp (world, depth){
  let count = 0
  let arr = ['A','E','I','O','U']
  for (let i = 0 ; i < arr.length ; i++ ){
      let copyArr = [...arr];
    copyArr.splice(i, 1);
      console.log('gg')
      console.log('test',copyArr)
      depth =  arr[i]
      console.log('depth',depth)
      for( let j = 0 ; j < arr.length ; j++){
      console.log('안 i',arr[i].repeat(j+1))
      count++
      console.log('count',count)
      }
      for ( let j = arr.length-1 ; j > 0 ; j -- ){
          for ( let k = 0 ; k < arr.length-1 ; k++){
              console.log('반복',arr[i].repeat(j)+copyArr[k])
                  count++
              
          }
          
      }
      // console.log('밖 반대로',arr[i].repeat(arr.length - i - 1))
      // console.log('계산',arr.length - i - 1)
      // console.log('밖',arr[i+1]+''.repeat(i+1))
  }
}

//예시

function solution(word) {
  let arr = ["","A","E","I","O","U"]

let result = []

function recurtion (n,str){
  if(n === 0){
      result.push(str)
      return
  }
  for(let i = 0 ; i < 6 ; i++){
      recurtion(n-1,`${str}${arr[i]}`)
  }
}
recurtion(5,"")
let data = [...new Set(result)].sort()
  return data.indexOf(word)
}

//세번째 시도


function solution(word) {
	let arr = ['','A','E','I','O','U']
    let result = []
    let str = ""
    
    function findAllArr(str) {
    
		for (let i = 0; i <= arr.length; i++) {
			findAllArr(str + arr[i])
		}
	}

    for( let j = 5; j <= 0; j--){
        if(j = 0){
            result.push(str)
            return
        }
        findAllArr(str);
        console.log('d',str.slice(0,10))
    }
	
   let setSort = [...new Set(result)].sort()
   console.log(setSort.slice(0,10))

	return setSort.indexOf(word)
}

//네번째 시도

function solution(word) {
	let arr = ['','A','E','I','O','U']
    let result = []
    let str = ""
    
    function findAllArr(n,str) {
        if(n === 0){
            result.push(str)
            return
        }

		for (let i = 0; i < arr.length; i++) {
			findAllArr(n-1,str + arr[i])
		}
	}

    findAllArr(5,str);
    let setSort = [...new Set(result)].sort()

	return setSort.indexOf(word)
}