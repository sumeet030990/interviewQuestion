// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const firstElement = strs[0];
  const result = []
  let overallCondition = true

  // split first element word to letters
  firstElement.split('').forEach((elementString, index) => {
    if(overallCondition) {
      // check with rest element if letters are same
      for (let arrayElement = 1; arrayElement < strs.length; arrayElement++) {  
        if(elementString !== strs[arrayElement][index]) {            
            overallCondition = false
          }
      }

      if(overallCondition) {
        result.push(elementString)
      }
    }
  });

  return result.join('');
};

const result = longestCommonPrefix(["flower","flow","flight"])
// const result = longestCommonPrefix(["dog","racecar","car"])
console.log('result: ', result);

/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */