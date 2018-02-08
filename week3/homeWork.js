'use strict'

//1.Your task is to write a function that takes another function as an argument and runs it.
console.log (
  '\n***************question 1 ************************************************************\n'
);





function foo(x) {
   

  
  x();
}
function bar() {
    

  console.log ('Hello, I am bar!');
  
}

foo(bar);


console.log(
  '\n***************question 2 ************************************************************\n'
);



//If you run the above code it will wait 5 seconds and print I am done.
//Please read something about setTimeout on MDN.The first argument to the setTimeout call is the callback(doIt)
 
setTimeout(function () {
  console.log("I will be executed in 5 seconds.");
}, 5000);

//-------------//
 //my  mistake was that  if(i % 3 === 0 && i % 5 === 0){




//-------------//
function threeFive (startIndex, stopIndex, threeCallback, fiveCallback) {
  var arr = [];
  for (var i = startIndex; i <= stopIndex; i++) {
    arr.push (i);
    if (i % 3 === 0) {
      threeCallback (i);
    }
    if (i % 5 === 0) {
      fiveCallback (i);
    }
  }

  return arr;
}
console.log (
  threeFive (
    10,
    15,
    function (num) {
      console.log (num + ' is divisible by 3');
    },
    function (num) {
      console.log (num + ' is divisible by 5');
    }
  )
);



  // uses a closure
  function sayDivisibleBy(divisor) {
    return function (num) {
      console.log(`${num} is divisible by ${divisor}`);
    }
  }

  threeFive(10, 15, sayDivisibleBy(3), sayDivisibleBy(5));

  

//I have still problems.with 4.2. 









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
// I have modified with console.log and with {}.

{
  function repeatStringNumTimes(str, num) {

    var newStr = '';
    for (num = 0; num < str.length; num++) {




      newStr = str.repeat(num);

      return newStr;

    }
  }

  console.log(repeatStringNumTimes("abc", 3));

}
//-----Q3.2-----
//A while loop.
// I have modified with console.log and with {}.
{
function repeatStringNumTimes(str, num) {

  var newStr = '';
  var num = 0;
  while (num < str.length) {
    num++;



    newStr = str.repeat(num);

    return newStr;

  }
}
   
   console.log (repeatStringNumTimes("abc", 3));

}
  
//-----Q3.3-----
//A do loop.
// I have modified with console.log and with {}.
{
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


  console.log(repeatStringNumTimes("abc", 3));


}

console.log(
  '\n***************question 4 ************************************************************\n'
);

{
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
  console.log(new Car());
  console.log(new MotorBike());
}
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
console.log(product);

console.log(
  '\n***************question 6************************************************************\n'
  );
  //We did some work with arrays - var arr = [1, 2, 3]
  //We can also nest arrays inside arrays like this
  //var arr2d = [[1, 2], [3, 4], [5, 6]](for math people you can think of this as a matrix)
  //How would you print all the items of an array with 3 dimensions ? How about with K dimensions ?
  //What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)  


//4.6 I have found the problem function name was not the same on for loop
 
  let myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  let arrText='';
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    arrText += myArray[i][j] + ' ';
  }
  console.log (arrText);
  arrText = '';
}




console.log(
  '\n***************question 7 ************************************************************\n'
);
//I have forgotten my conclusion
let x = 9;
function f1 (val) {
  val = val + 1;
  return val;
}
f1 (x);
console.log (x);
// at this point val is still 9
//Yes, Javascript always passes by value, 

let y = {x: 9};
function f2 (val) {
  val.x = val.x + 1;
  return val;
}
f2 (y);
console.log(y);


// so it is now { x : 9}
// val definitely doesn't point to the new object created as the last line
//so if we are passing object or array as an argument to the method, 
//then there is a possibility that value of the object can change.
