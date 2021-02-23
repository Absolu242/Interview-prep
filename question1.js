// Question 1
// Given an array of integers, return the indexes of the two numbers that
// add up to a given target
//
//

//******First solution*******//

const nums = [1, 2, 7, 9, 3]
let target = 11

function FindIndex01(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return null
}

//******Second solution*******//

const FindIndex02 = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberFind = target - nums[p1]

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === numberFind) {
        return [p1, p2]
      }
    }
  }
  return null
}

//Optimized time and space complexity
//******Third solution*******//

function FindIndex03(nums, target) {
  const numsMap = {}
  for (let i = 0; i <= nums.length; i++) {
    const currentMapVal = numsMap[nums[i]]

    if (currentMapVal >= 0) {
      return [currentMapVal, i]
    } else {
      const numberFind = target - nums[i]
      numsMap[numberFind] = i
    }
  }
  return null
}

console.log(FindIndex01(nums, target))
console.log(FindIndex02(nums, target))
console.log(FindIndex03(nums, target))
