var lengthOfLongestSubstring = function(s) {
  let resultArray = []
  for (let index = 0; index < s.length; index++) {
    let foundDuplicate = false;
    let includeArray = []
    for (let innerIndex = 0; innerIndex < s.length; innerIndex++) {
        if(!includeArray.includes(s[innerIndex]) && !foundDuplicate) {
          if( index < innerIndex) {
            includeArray.push(s[innerIndex])
          }
        } else {
          foundDuplicate = true
        }
    }
    if(includeArray.length >= resultArray.length ) {
      resultArray = includeArray
    }
 }
 return resultArray.length
};

console.log(lengthOfLongestSubstring("abcabcbbabcd"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
