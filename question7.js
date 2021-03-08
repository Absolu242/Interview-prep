S = "abccdba"

function validSub(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }

    left++
    right--
  }
  return true
}

const isAlmost = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      return validSub(s, left + 1, right) || validSub(s, left, right - 1)
    }

    left++
    right--
  }
  return true
}
