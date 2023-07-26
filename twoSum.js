/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = null
  nums.forEach((data, index) => {
    if (result === null) {
      const expectedSecondElement = target - data // if subtracted we will get the expected second element 
      const expectedSecondElementIndex = nums.indexOf(expectedSecondElement) // find if the expected second element in present in the array
      if (expectedSecondElementIndex !== -1 && expectedSecondElementIndex !== index) {
        // if found then update the result
        result = [index, expectedSecondElementIndex];
      }
    }
  })

  console.log('result: ', result);
  return result
};

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
// twoSum([2, 7, 11, 15], 9);

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// twoSum([3,2,4], 6);

//Input: nums = [3,3], target = 6
//Output: [0,1]
twoSum([3, 3], 6)

//Input: nums = [-1,-2,-3,-4,-5], target = -8
//Output: [2, 4]
twoSum([-1, -2, -3, -4, -5], -8)