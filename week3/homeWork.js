'use strict'

//1.Your task is to write a function that takes another function as an argument and runs it.
console.log (
  '\n***************question 1 ************************************************************\n'
);



// function functionOne (x) {
//   return x;
// }

// function functionTwo (var1) {
//   // some code
// }

// functionTwo (functionOne);
//In this case, functionTwo can use functionOne inside of it.

function foo(param1) {
   let param1 ='Hi, myFunction here!';

  console.log (foo(x));
}
function bar(param2) {
   let  param2='Hello, I am bar!';

  console.log ('Hello, I am bar!');
  
}

bar(foo);
