'use strict'

//1.Your task is to write a function that takes another function as an argument and runs it.
console.log (
  '\n***************question 1 ************************************************************\n'
);



// function foo() {
//   bar.apply(null, arguments);
// }

// function bar() {
//   console.log('Hello, I am bar!');
// }
// foo(bar);
//In this case, functionTwo can use functionOne inside of it.

function foo(x) {
   

  console.log('Hi, myFunction here!');
  x();
}
function bar() {
    

  console.log ('Hello, I am bar!');
  
}

foo(bar);


console.log(
  '\n***************question 2 ************************************************************\n'
);


// function makeTimeoutFunc(param) {
//   return function () {
//     // does something with param
//   }
// }


 
setTimeout(function () {
  console.log("I will be executed in 2 seconds.");
}, 5000);
