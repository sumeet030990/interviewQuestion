/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  nums.forEach((data) => {
    if (data !== val) {
      nums[index] = data;
      index++;
    }
  });
  console.log('nums: ', nums);

  return index;
};

const result = removeElement([3, 2, 2, 3], 3);
console.log('result: ', result);
/* 
url: https://leetcode.com/problems/remove-element/description/

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
