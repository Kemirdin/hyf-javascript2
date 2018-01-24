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

var numbers = [1, 2, 3, 4];

var newNumbers = numbers
  .filter (function (number) {
    return number % 2 !== 0;
  })
  .map (function (number) {
    return number * 2;
  });

console.log ('The doubled numbers are', newNumbers); // [2, 6]
