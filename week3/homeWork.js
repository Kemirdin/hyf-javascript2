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



// The
// function should generate an array containing values from start value to end value(inclusive).

// Then the
// function should iterate over the array and call the first callback
// if the array value is divisible by 3

function loveTheThrees(collection) {
  var newArray = []
  for (var i = 0; i < collection.length; i++) {
    if (myArray[i] % 3 === 0) {
      newArray.push(collection[i])
    }
  }
  return newArray;
}

// The
// function should call the second callback
// if the array value is divisible by 5
function loveTheFives (collection) {
  var newArray = [];
  for (var i = 0; i < collection.length; i++) {
    if (myArray[i] % 5 === 0) {
      newArray.push (collection[i]);
    }
  }
  return newArray;
}


// Both functions should be called
// if the array value is divisible by both 3 and 5



function threeFive(param) {
  //create an array
  var array = [];
  //begin the loop
  for (i = 1; i <= param; i++) {
    //detect values divisble by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      //push to the array
      array.push(i);
    }
    //detect values divisible by 3
    else if (i % 3 === 0) {
      array.push(i);
    }
    //detect values divisible by 5
    else if (i % 5 === 0) {
      array.push(i);
    }
  }
  
  
  // You must write a
// function that takes 4 arguments. - A start value - An end value - A callback to call
// if the number is divisible by 3 - A callback to use
// if the number is divisible by 5


function threeFive (startIndex, stopIndex, threeCallback, fiveCallback) {
  let arr = [];
   for(var i = startIndex; i <= stopIndex; i++){
    if(i % 3 === 0 && i % 5 === 0){
            //push to the array
            array.push(i);
        }
        //detect values divisible by 3
        else if(i % 3 === 0){
            array.push(i);
        }
        //detect values divisible by 5
        else if(i % 5 === 0){
            array.push(i);
  }
   
  return arr;
}
}
threeFive (10, 15, sayThree, sayFive);









console.log(
  '\n***************question 3 ************************************************************\n'
);

// function repeatStringNumTimes(str, num) {

//   var newStr = '';

//   if (num < 0) return newStr;

//   newStr = str.repeat(num);

//   return newStr;

// }

// repeatStringNumTimes("abc", 3);


//-----Q3.1-----//
//3.1 A for loop.

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

function repeatStringNumTimes(str, num) {

  var newStr = '';
  for (num = 0; num < str.length; num++) {




    newStr = str.repeat(num);

    return newStr;

  }
}

  repeatStringNumTimes("abc", 3);


//-----Q3.2-----
//A while loop.

function repeatStringNumTimes(str, num) {

  var newStr = '';
  var num = 0;
  while (num < str.length) {
    num++;



    newStr = str.repeat(num);

    return newStr;

  }
}
   
    repeatStringNumTimes("abc", 3);

  
  
//-----Q3.2-----
//A do loop.
function repeatStringNumTimes(str, num) {

  var newStr = '';
  var num = 0;
  do {
    num += 1;

  }

  while (num < str.length);




  newStr = str.repeat(num);

  return newStr;

}


repeatStringNumTimes("abc", 3);




console.log(
  '\n***************question 4 ************************************************************\n'
);


var Car = function () {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};



var MotorBike = function () {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};

console.log(
  '\n***************question 5 ************************************************************\n'
);
//Nesting For Loops

function multiplyAll(arr) {
  var product = 1;
 

  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr[i].length; x++) {
      product *= arr[i][x];
    }
  }


  return product;
}


multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7]
]);

console.log(
  '\n***************question 6************************************************************\n'
  );
  //We did some work with arrays - var arr = [1, 2, 3]
  //We can also nest arrays inside arrays like this
  //var arr2d = [[1, 2], [3, 4], [5, 6]](for math people you can think of this as a matrix)
  //How would you print all the items of an array with 3 dimensions ? How about with K dimensions ?
  //What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)  

 
 
  var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  var arrText='';
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    arrText += arr[i][j] + ' ';
  }
  console.log (arrText);
  arrText = '';
}


console.log(
  '\n***************question 7 ************************************************************\n'
);