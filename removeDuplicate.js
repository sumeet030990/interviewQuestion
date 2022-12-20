/**
 * Remove duplicate elements from array
 */

const removeDuplicate = (arrayData) => {
  const result = []
  arrayData.map(data => {
    if (!result.includes(data)) {
      result.push(data)
    }
  })
  console.log('result: ', result);
}

removeDuplicate([1, 2, 3, 4, 4, 4, 5, 1, 2, 3])