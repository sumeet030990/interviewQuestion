/**
 * https://leetcode.com/problems/number-of-good-pairs/
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0

 */
var numIdenticalPairs = function (nums) {
  let result = 0;
  nums.forEach((data1, index1) => {
    nums.forEach((data2, index2) => {
      if (index1 <= index2 && data1 === data2 && index1 !== index2) {
        result += 1
      }
    })
  })
  return result
};

numIdenticalPairs([1, 2, 3, 1, 1, 3])