function solution(nums) {
  const count = nums.length/2
  const set = new Set(nums)
  const arr = [...set]
  return arr.length < count ? arr.length : count;
}