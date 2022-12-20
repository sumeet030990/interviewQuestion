/**
 * factorial series is series containing product of all positive number till the element  
 * factorial(2) = 2 * 1 = 2
 * factorial(3) = 3 * 2 * 1 = 6
 * */

const factorial = (element) => {
  let factorialResult = 1
  for (let index = 1; index <= element; index++) {
    factorialResult = factorialResult * index
  }
  console.log(`factorialResult(${element}): `, factorialResult);
}

factorial(2)
factorial(3)
factorial(5)
// Big-O= O(n)