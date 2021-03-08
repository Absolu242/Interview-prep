S = "A man, a plan , a canal:Panama"

function isValid(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()

   let left = 0;
   let right = s.length-1;

   while(left<right){
      if(s[left] !== s[right]){
         return false
      }

      left++;
      right--
   }
   return true
}

isValid(S)
