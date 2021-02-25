/* Question 3
Given an array of integers representing an elevation map
where the width of each bar is 1 , return how much rain water can be trapped
*/
const nums = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

function Water(nums) {
  let TotalWater = 0
  let maxL = 0
  let maxR = 0
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    if (nums[left] <= nums[right]) {
      if (nums[left] >= maxL) {
        maxL = nums[left]
      } else {
        TotalWater += maxL - nums[left]
      }
      left++
    } else {
      if (nums[right] >= maxR) {
        maxR = nums[right]
      } else {
        TotalWater += maxR - nums[right]
      }
      right--
    }
  }
  return TotalWater
}

console.log(Water(nums))
