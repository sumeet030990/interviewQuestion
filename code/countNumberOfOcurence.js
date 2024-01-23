const countNumberOfOccurence = arrayData => {
  const result = {}
  arrayData.forEach(data => {
    result[data] = result[data] + 1 || 1
  });

  console.log('result: ', result);
}

countNumberOfOccurence([1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 5, 3, 2, 3])