/**
 * If string is same when reversed then it is pallindrom
 * 
 * @param {*} string 
 */
const checkPalindrome = (string) => {
  const reverseString = string.toString().split('').reverse().join('')
  if (string.toString() === reverseString) {
    console.log(`${string} string is palindrome`)
  } else {
    console.log(`${string} & ${reverseString} string are not same hence it is not a palindrome`)

  }
}
//take input

checkPalindrome(121);
checkPalindrome('hello');
checkPalindrome('madam');