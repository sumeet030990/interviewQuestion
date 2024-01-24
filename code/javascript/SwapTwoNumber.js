/**
 * Swap two number without using third variable  
 * a = 4 ,b= 5 then op ll be a = 5, b = 4
 * */

const swapTwoNumberWithArrayDestructing = () => {
  console.log('swapTwoNumberWithArrayDestructing: ');
  let a = 1;
  let b = 2;
  console.log(`Before Swap a=${a} & b=${b}`);
  [a, b] = [b, a];
  console.log(`After Swap a=${a} & b=${b}`);
}

const swapTwoNumberWithMathematicOpertaion = () => {
  console.log('swapTwoNumberWithMathematicOpertaion: ');
  let a = 1;
  let b = 2;
  console.log(`Before Swap a=${a} & b=${b}`)
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`After Swap a=${a} & b=${b}`)
}
swapTwoNumberWithArrayDestructing()
swapTwoNumberWithMathematicOpertaion()
// Big-O= O(n)