/**
 * fibonacci series is series containing addition of last element of the series
 * fibonacci(2) = [0, 1]
 * fibonacci(3) = [0, 1, 1]
 * fibonacci(4) = [0, 1, 1, 2]
 * fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
 * */

const fibonacci = (element) => {
  const fibonacciResult = [0, 1]
  for (let index = 2; index < element; index++) {
    fibonacciResult[index] = fibonacciResult[index - 1] + fibonacciResult[index - 2]
  }
  console.log('fibonacciResult: ', fibonacciResult);
}

fibonacci(7)

// Big-O= O(n)