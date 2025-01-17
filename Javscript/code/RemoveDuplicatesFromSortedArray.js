/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Remove Duplicate from Array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const result = [];
  nums.forEach((data, index) => {
    if (!result.includes(data)) {
      result.push(data);
    }
  });

  nums = nums.fill(...result, 0, result.size);
  console.log('nums: ', nums.fill(...result, 0, result.size));
  return result.length;
};

const result = removeDuplicates([1, 1, 2, 2]);
console.log('result: ', result);
