function solution(nums) {
  let n = nums.length/2
  let set = new Set(nums)
  let length = [...set].length //array로 전환안해도 set.size로 길이 측정 가능
  return length<n?length:n;
}

//set쓰면 간단할거 같아서 set 사용했는데 해시로 다시 풀어보겠습니다..