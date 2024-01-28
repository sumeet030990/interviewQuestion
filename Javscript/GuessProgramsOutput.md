### Questions that are asked during interview for Output

<ol>
  <li>

  ```javascript
  console.log(x);
  const x = function () {
    console.log('Hi');
  }
  ```
  output
  ```
  ReferenceError: Cannot access 'x' before initialization
  ```
  ```
  Reason: it will treat variable x as normal const variable
  ```
  </li>
  ***************************************************************************************
  ***************************************************************************************
  <li>

  ```javascript
  console.log(x);
  var x = function () {
    console.log('Hi');
  }
  ```
  output
  ```
  undefined
  ```
  ```
  Reason: it will treat variable x as normal var variable
  ```
  </li>
  ***************************************************************************************
  ***************************************************************************************
  <li>

  ```javascript
    var x=1
    a();
    b();
    console.log('global x: ', x);

    function a() {
      var x=10
      console.log('a of x: ', x);
    }

    function b() {
      var x=100
      console.log('b of x: ', x);
    }
  ```
  output
  ```
  a of x:  10
  b of x:  100
  global x:  100
  ```

  Reason
  ```
  var x has global scope,
  As every block has var x, it printed different values of x in every block
  ```
  </li>
  ***************************************************************************************
  ***************************************************************************************
  <li>


  ```javascript
  var x=1 // let x=1 ll also act same
  a();
  b();
  console.log('global x: ', x);

  function a() {
    console.log('before a of x: ', x);
    var x=10
    console.log('After a of x: ', x);
  }

  function b() {
    console.log('Before b of x: ', x);
    var x=100
    console.log('After b of x: ', x);
  }

  console.log('After global of x:', x)
  ```

  output
  ```
  before a of x:  1
  After a of x:  10
  Before b of x:  10
  After b of x:  100
  global x:  100
  After global of x: 100
  ```

  Reason
  ```
  Closure concept is implemented here
  As defination of variable x is not present in a and b, it will travel upwards to the global execution content to find its defination 
  ```
  </li>
  ***************************************************************************************
  ***************************************************************************************
  
  <li>

  ```javascript
  var x=1 // let x=1 ll also act same
  a();
  b();
  console.log('global x: ', x);

  function a() {
    console.log('before a of x: ', x);
    let x=10
    console.log('After a of x: ', x);
  }

  function b() {
    console.log('Before b of x: ', x);
    var x=100
    console.log('After b of x: ', x);
  }

  console.log('After global of x:', x)
  ```

  output
  ```
  console.log('before a of x: ', x);
                                 ^
  ReferenceError: Cannot access 'x' before initialization
  ```

  Reason
  ```
  As let has block scope it throwed Reference Error
  ```
  </li>
  ***************************************************************************************
  ***************************************************************************************
  <li>

  ```javascript
    let x=1
    {
      var x=10
    }
  ```

  output
  
  ```
    SyntaxError: Identifier 'x' has already been declared
  ```

  Reason
  ```
  This is illegal shadowing, because var has global scope and let cannot be redeclared 
  ```

  </li>
  ***************************************************************************************
  ***************************************************************************************
  
  <li>

  ```javascript
    for (var index = 0; index <5; index++) {
      setTimeout(() => {
        console.log('index: ', index);
        
      }, 1000);
    }
  ```

  output: it will print 5; 5 times
  
  ```
    (5)index.js:3 index:  5
  ```

  Reason
  ```
  as for loop execution ll completed within 1000 ms and the index value is incremented in every loop and as var has global sope then the value of same var variable index is updated everytime(shadowing concept) & after 1000ms ll be 5; hence it ll print 5 in console for 5 times()
  ```

  </li>
  ***************************************************************************************
  ***************************************************************************************
  
  <li>

  ```javascript
    for (let index = 0; index <5; index++) {
      setTimeout(() => {
        console.log('index: ', index);
        
      }, 1000);
    }
  ```

  output:
  
  ```
  1
  2
  3
  4
  5
  ```

  Reason
  ```
  as let has block scope then for every settimeout it ll refer to the value of index of that block
  ```

  </li>
  ***************************************************************************************
  ***************************************************************************************
  <li> If we want to print number series with var

  ```javascript
  for (var index = 0; index <5; index++) {
    function close(x) {
      setTimeout(() => {
        console.log('index: ', x);
        
      }, 1000);
    }

    close(index)
  }
  ```

  output:
  
  ```
  index:  0
  index:  1
  index:  2
  index:  3
  index:  4
  ```

  Reason
  ```
  as we pass value of index in funtion a seprate execution context ll be created with that value
  ```

  </li>
  ***************************************************************************************
  ***************************************************************************************
</ol>