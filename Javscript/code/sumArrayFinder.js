const findSubArray = (arrayData, sum) => {
  let result = [];
  let resutFound = false;
  arrayData.forEach((element, index) => {
    if (resutFound) return;
    let remaining = sum - element;
    result.push(element);
    for (i = index + 1; i <= arrayData.length; i++) {
      result.push(arrayData[i]);
      remaining = remaining - arrayData[i];
      if (remaining == 0) {
        resutFound = true;
        return;
      }
    }

    result = [];
  });

  return result;
};

const result = findSubArray([8, 4, 1, 9, 3, 5, 7, 2], 17);
console.log('result: ', result);
