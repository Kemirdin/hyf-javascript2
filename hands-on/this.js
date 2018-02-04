'use strict';

function whatIsThis (howCalled) {
  console.log ('\nCalled ' + howCalled + ', "this" is: ' + this);
}

whatIsThis ('as a function');

// is same as above
whatIsThis.call (undefined, 'using the call method');

whatIsThis.call ('HYF', 'using the call method');

const myObj = {
  myData: 'HYF',
  myMethod: function () {
    console.log (this.myData);
  },
};

myObj.myMethod ();

function printMyData () {
  console.log (this.myData);
}

const newFunction = printMyData.bind (myObj);
newFunction ();
