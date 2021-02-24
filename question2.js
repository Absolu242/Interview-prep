/*
Question 2 :

You are given an array of positive intergers where each integer represents the height of a vertical line on a chart. Find two lines which together with thw x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold*/

const numbers = [4, 8, 10, 2, 3, 9] //[7, 1, 2, 3, 9]

function AreaCalc(nums) {
  let maxArea = 0
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    let currentMaxArea = Math.min(nums[i], nums[j]) * (j - i)
    maxArea = Math.max(maxArea, currentMaxArea)

    if (nums[i] <= nums[j]) {
      i++
    } else {
      j--
    }
  }
  return maxArea
}

console.log(AreaCalc(numbers))
