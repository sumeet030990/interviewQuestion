const sum = (a) => {
  return (b) => {
    if (b === undefined) {
      return a;
    } else {
      return sum(a + b);
    }
  };
};
const result = sum(2)(4)(8)(2)();
console.log('result: ', result);
