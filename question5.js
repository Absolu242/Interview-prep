S = "abcabcbb"






// Try 2

// function check(st) {
//   let winSize = 0
//   let length = 0
//   let currentSt = []

//   for (let i = 0; i < st.length; i++) {
//     let currentChar = st[i]

//     if (!currentSt.includes(currentChar)) {
//       currentSt.push(currentChar)
//       winSize++
//     } else {
//       if (winSize > length) {
//         currentSt.shift()
//         length = winSize
//         winSize = 0
//       } else {
//         length
//       }
//     }
//   }
//   console.log(currentSt)
//   return (length = currentSt.length)
// }

// console.log(check(S))


// Try 1

// function check(st) {
//   let maxSize = 0
//   let obj = []

//   if (st.length <= 1) return st.length
//   for (let i = 0; i < st.length; i++) {
//     for (let j = i; j < st.length; j++) {
//       let checker = st[j]

//       if (!obj.includes(checker)) {
//         obj.push(checker)
//       }
//       maxSize = obj.length
//       console.log(obj)
//     }
//   }
//   return maxSize
// }

// console.log(check(S))
