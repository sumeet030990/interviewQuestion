/**
 * If string is same when reversed then it is pallindrom
 *
 * @param {*} string
 */
const checkPalindrome = (number) => {
  if (number < 0) {
    console.log('Not Pallindrome');
    return false;
  }
  // usingStringFunctions(number);
  usingMaths(number);
};

const usingStringFunctions = (x) => {
  const reverseString = string.toString().split('').reverse().join('');
  if (string.toString() === reverseString) {
    console.log(`${string} string is palindrome`);
  } else {
    console.log(`${string} & ${reverseString} string are not same hence it is not a palindrome`);
  }
};

const usingMaths = (x) => {
  const original = x;
  let reverse = 0;
  while (x > 0) {
    const lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  if (original === reverse) {
    console.log(`${original} number is palindrome`);
  } else {
    console.log(`${original} & ${reverse} number are not same hence it is not a palindrome`);
  }
};

//take input
checkPalindrome(8);
