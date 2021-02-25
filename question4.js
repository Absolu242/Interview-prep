// //[STRINGS]
/* Given two srings S and T , return if they equal when both are typed out . Any # that appears in the string counts as a backspace*/

S = "ab#c"
T = "ad#c"

function backSpaceCompare(S, T) {
  let p1 = S.length - 1
  let p2 = T.length - 1

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2

        while (backCount > 0) {
          p1--
          backCount--

          if (S[p1] === "#") {
            backCount += 2
          }
        }
      }
      if (T[p2] === "#") {
        let backCount = 2
        while (backCount > 0) {
          p2--
          backCount--

          if (T[p2] === "#") {
            backCount += 2
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false
      } else {
        p1--
        p2--
      }
    }
  }
  return true
}

console.log(backSpaceCompare(S, T))
