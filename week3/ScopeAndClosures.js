// Write a function that would allow you to do this.

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// My Solution:

// function addSix () {
//   return function CreateBase (num) {
//     return n + num;
//   };
// }

// var add = addSix (15);

// add (10);
function createBase (val) {
  return function (x) {
    return (x += val);
  };
}

let addSix = createBase (6);


console.log (addSix (12));

