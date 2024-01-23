/**
 * prie number is number which is divisible by itself only  
 * primeNumber(4) = false
 * primeNumber(5) =true
 * primeNumber(7) = true
 * */

const isPrimeNumber = (number) => {
  let primeNumberResult = false
  for (let index = 2; index < number; index++) {
    if (!primeNumberResult && number % index === 0) {
      primeNumberResult = true
    }
  }
  console.log(`primeNumberResult(${number}): `, primeNumberResult);
}

isPrimeNumber(4)
isPrimeNumber(5)
// Big-O= O(n)