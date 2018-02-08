console.log ('\nStep 4.1');
{
  function foo (func) {
    func ();
  }

  function bar () {
    console.log ('Hello, I am bar!');
  }

  foo (bar);
}

console.log ('\nStep 4.2');
{
  function threeFive (startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
      numbers.push (i);
    }

    numbers.forEach (num => {
      if (num % 3 === 0) {
        threeCallback (num);
      }
      if (num % 5 === 0) {
        fiveCallback (num);
      }
    });
  }

  // uses a closure
  function sayDivisibleBy (divisor) {
    return function (num) {
      console.log (`${num} is divisible by ${divisor}`);
    };
  }

  threeFive (10, 15, sayDivisibleBy (3), sayDivisibleBy (5));
}

console.log ('\nStep 4.3.1');
{
  function repeatStringNumTimes (str, num) {
    if (typeof num !== 'number' || num < 1) {
      return '';
    }
    const origStr = str;
    for (let i = 1; i < num; i++) {
      str += origStr;
    }
    return str;
  }

  console.log (repeatStringNumTimes ('abc', 3));
}

console.log ('\nStep 4.3.2');
{
  function repeatStringNumTimes (str, num) {
    if (typeof num !== 'number' || num < 1) {
      return '';
    }
    const origStr = str;
    let i = 1;
    while (i < num) {
      str += origStr;
      i++;
    }
    return str;
  }

  console.log (repeatStringNumTimes ('abc', 3));
}

console.log ('\nStep 4.3.3');
{
  function repeatStringNumTimes (str, num) {
    if (typeof num !== 'number' || num < 1) {
      return '';
    }
    const origStr = str;
    let i = 1;
    do {
      str += origStr;
      i++;
    } while (i < num);
    return str;
  }

  console.log (repeatStringNumTimes ('abc', 3));
}

console.log ('\nStep 4.4');
{
  // Note: prefer let and const over var
  var Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
  };

  var MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
  };

  console.log (new Car ());
  console.log (new MotorBike ());
}

console.log ('\nStep 4.5');
{
  // note: prefer const and let over var
  function multiplyAll (arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      var innerArray = arr[i];
      for (var j = 0; j < innerArray.length; j++) {
        product *= innerArray[j];
      }
    }
    return product;
  }

  const result = multiplyAll ([[1, 2], [3, 4], [5, 6, 7]]);
  console.log (result);
}

console.log ('\nStep 4.6');
{
  const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];

  // This function calls itself recursively
  function printAll (arg) {
    if (Array.isArray (arg)) {
      arg.forEach (elem => printAll (elem));
    } else {
      console.log (arg);
    }
  }

  printAll (arr3d);
}

console.log ('\nStep 4.7');
{
  let x = 9;
  function f1 (val) {
    val = val + 1;
    return val;
  }
  f1 (x);
  console.log (x);
  console.log (
    'function f1 does not change the value of variable x: x is passed by value'
  );

  let y = {x: 9};
  function f2 (val) {
    val.x = val.x + 1;
    return val;
  }
  f2 (y);
  console.log (y);
  console.log (
    'function f2 changes the value of property y.x: y is passed by reference'
  );
}
