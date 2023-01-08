function solution(nums) {
  let count = 0;
  for(let i = 0; i<nums.length; i++){
      for(let j = i+1; j<nums.length; j++){
          for(let k = j+1; k<nums.length; k++){
              let sum = nums[i]+nums[j]+nums[k];
              if(confirmFunc(sum) == true) count++
          }
      }
  }
  return count
}

const confirmFunc = (sum) => {
  for(let z = 2; z<=Math.ceil(Math.sqrt(sum)); z++){
      if(sum % z == 0){
          return false
      }
  }
  return true
}