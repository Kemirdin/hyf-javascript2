//This function is used to clone (coping) a javascript object into another.

function cloneObject (obj) {
  const newObj = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = cloneObject (obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const originalObject = {
  name: 'Ali',
  age: 22,
  address: {
    streetNo: 10,
    streetName: 'street name',
  },
};

const clonedObject = cloneObject (originalObject);

console.log ('originalObject: ', JSON.stringify (originalObject));
console.log ('clonedObject', JSON.stringify (clonedObject));

// Manipulating cloneObject.address

clonedObject.address.streetNo = 99;
clonedObject.address.streetName = 'another name';

console.log ('\nAfter clonedObject manipulation');

console.log ('originalObject: ', JSON.stringify (originalObject)); // see that originalObject haven't affected by clonedObject changes
console.log ('clonedObject', JSON.stringify (clonedObject));


// test 2
const originalObject = {
  name: 'Ali',
  age: 22,
  address: {
    streetNo: 10,
    streetName: 'street name',
  },
};

const clonedObject = originalObject;

console.log ('originalObject: ', JSON.stringify (originalObject));
console.log ('clonedObject', JSON.stringify (clonedObject));

// Manipulating cloneObject.address

clonedObject.address.streetNo = 99; // this also means originalObject.address.streetNo
clonedObject.address.streetName = 'another name'; // // this also means originalObject.address.streetName

console.log ('\nAfter clonedObject manipulation');

console.log ('originalObject: ', JSON.stringify (originalObject));
console.log ('clonedObject', JSON.stringify (clonedObject));
