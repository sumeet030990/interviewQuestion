/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

const isValid = (str) => {
  const OPENING_BRACKETS = ['(', '[', '{'];
  const CLOSING_BRACKETS = [')', ']', '}'];
  const parenthesesMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (let index = 0; index < str.length; index++) {
    const element = str[index];

    if (stack.length === 0 && OPENING_BRACKETS.includes(element)) {
      // the first element should be opening braces
      stack.push(element); // push the opening braces in the stack
    } else if (stack.length === 1 && CLOSING_BRACKETS.includes(element)) {
      // after pushing the opening braces the corresponding should be the closing bracket thats why we check if there should be only one element in the stack
      const openingLastParanthesis = stack.pop(); // pop the element from the stack which should be the opening bracket so that we can check if the next element is corresponding closing bracket
      // the value of parenthesesMap[element] ll be the opening bracket, check if its equal to openingLastParanthesis
      if (openingLastParanthesis !== parenthesesMap[element]) {
        return false; // if not equal then it means the string is invalid
      }
    }
  }

  return true;
};

// const result = isValid('{[()]}');
const result = isValid('()[]{}');
// const result = isValid('(]');
console.log('result: ', result);
