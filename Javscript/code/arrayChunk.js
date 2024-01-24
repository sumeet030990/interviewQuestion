const arrayChunk = (arrayData, size) => {
  const result = []
  let chunk = []
  let arrayLength = arrayData.length
  arrayData.forEach((data, index) => {
    chunk.push(data)
    // if size matches then push the chunk data in result and reset chunk
    if (chunk.length === size) {
      result.push(chunk)
      chunk = []
    }
    // check for last element i.e. if there's data in chunk and if the current element is last element of array then we can push the chunk data into result
    if (arrayLength - 1 === index) {
      result.push(chunk)
    }
  });
  console.log(result)
}
arrayChunk([1, 2, 3, 2, 3234, 234, 3, 23, 2, 2, 1], 3)