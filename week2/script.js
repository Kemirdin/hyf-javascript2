/*Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

Your solution could be something like this:*/

let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

//map & filter. Transform values

let numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter (function (number) {
    return number % 2 !== 0;
  })
  .map (function (number) {
    return number * 2;
  });

console.log ('The doubled numbers are', newNumbers); // [2, 6]

/*map & filter and Arrow functions.Transform values ,
function(number) with arrow function would be like (number) => */


var numbers = [1, 2, 3, 4];

var newNumbers = numbers
  .filter ( (number) => {
    return number % 2 !== 0;
  })
  .map ((number) => {
    return number * 2;
  });

console.log ('The doubled numbers are', newNumbers); // [2, 6]


/* Write a program that does the following below. Use map and filter. You will also need a forEach or a for loop for the 'summing up' part.
Collect two days' worth of tasks.
Convert the task durations to hours, instead of minutes.
Filter out everything that took two hours or more (remove from the collection)
Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.
Output a formatted Euro amount.
Don't forget to use => */
let monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

let tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

let tasks = monday.concat (tuesday);
