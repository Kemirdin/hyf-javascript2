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
var counter = function () {
  var _counter = 0;
  return {
    add: function (num) {
      _counter += num;
    },
    retrieve: function () {
      return 'the value of counter is currently: ' + _counter;
    },
  };
};

var count = counter ();
count.add (9);
count.add (5);
count.retrieve ();
