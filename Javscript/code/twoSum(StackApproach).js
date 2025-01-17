var twoSum = function (nums, target) {
  const stack = [];
  const result = [];
  nums.forEach((num, index) => {
    if (result.length === 0) {
      const secondElement = target - num;
      if (stack.includes(secondElement)) {
        const secondElementIndex = stack.findIndex((el) => el === secondElement);
        result.push(secondElementIndex);
        result.push(index);
        return result;
      }

      stack.push(num);
    }
  });
  return result;
};
// Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
const result = twoSum([2, 7, 11, 15], 18);
console.log('result: ', result);
