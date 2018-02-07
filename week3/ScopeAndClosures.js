// Write a function that would allow you to do this.

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// My Solution:





  function createBase (num) {
    return function (n) {
      return (n + num);
    };
  }

let addSix = createBase(6);
  


console.log("the value  is currently:" + addSix(10));
  console.log ('the value  is currently:' + addSix (21));


