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

//If you run the above code it will wait 5 seconds and print I am done.
//Please read something about setTimeout on MDN.The first argument to the setTimeout call is the callback(doIt)
 
setTimeout(function () {
  console.log("I will be executed in 5 seconds.");
}, 5000);

// You must write a
// function that takes 4 arguments. - A start value - An end value - A callback to call
// if the number is divisible by 3 - A callback to use
// if the number is divisible by 5

// The
// function should generate an array containing values from start value to end value(inclusive).

// Then the
// function should iterate over the array and call the first callback
// if the array value is divisible by 3

// The
// function should call the second callback
// if the array value is divisible by 5

// Both functions should be called
// if the array value is divisible by both 3 and 5












console.log(
  '\n***************question 3 ************************************************************\n'
);


function repeatStringNumTimes(str, num) {

  var newStr = '';

  if (num < 0) return newStr;

  newStr = str.repeat(num);

  return newStr;

}

repeatStringNumTimes("abc", 3);