const animals = [
  {
    name: 'hedgehog',
    size: 'small',
    weight: 500,
  },
  {
    name: 'meercat',
    size: 'small',
    weight: 730,
  },
  {
    name: 'capricorn',
    size: 'medium',
    weight: 1000,
  },
  {
    name: 'mammoth',
    size: 'big',
    weight: 8000,
  },
];

//Create a new array animalNames, using a for-loop that contains the names of all the animals.
const animalNames = [];

/*for (let i = 0; i < animals.length; i++) {
  
    animalNames (animals[i] );
  
}*/

for (let i = 0; i < animals.length; i++) {
  console.log (animals[i]);
}

//Now create another array do the same only using map.






const animalNames= numbers.map (function (animals) {
    return animals;
  });


  //Create an array smallAnimals that only contains the animals which are small, using a for-loop



 const smallAnimals  = [];
for(let i=0, !== 'medium'& animals!=='big'; i++)
console.log (smallAnimals[i]);


//Now do the same only use the filter() method to accieve this.
const smallAnimals = animals
  .filter (smallAnimals => {
    return (animals !== 'medium') & (animals !== 'big');
  })
  .map (function (animals) {
    return smallAnimals;
  });

  //Implement a function that adds two binary numbers together (in string representation) and output the sum of these bumbers as a binary string
addBinary ('00101101', '01001110');

 a = '00101101';
 b = '01001110';

console.log (a + b);








/*const animals = [
  {
    name: 'hedgehog',
    size: 'small',
    weight: 500,
  },
  {
    name: 'meercat',
    size: 'small',
    weight: 730,
  },
  {
    name: 'capricorn',
    size: 'medium',
    weight: 1000,
  },
  {
    name: 'mammoth',
    size: 'big',
    weight: 8000,
  },
];

// 1
console.log ('\n=====> Animal names (for-loop)\n');
const animalNames = [];
animals.forEach (animal => animalNames.push (animal.name));
console.log (animalNames);

// 2
console.log ('\n=====> Animal names (map)\n');
const animalNamesMap = animals.map (function (animal) {
  return animal.name;
});
console.log (animalNamesMap);

// 3
console.log ('\n=====> Small animals (for-loop)\n');
const smallAnimals = [];
animals.forEach (animal => {
  if (animal.size === 'small') {
    smallAnimals.push (animal);
  }
});
console.log (smallAnimals);

// 4
console.log ('\n=====> Small animals (filter)\n');
const smallAnimalsFlter = animals.filter (animal => animal.size === 'small');
console.log (smallAnimalsFlter);

// Convert to Binary
function addBinary (x, y) {
  return (parseInt (x, 2) + parseInt (y, 2)).toString (2);
}

console.log ('\n=====> Convert to binary');
const addBinaryResult = addBinary ('00101101', '01001110');
console.log (addBinaryResult);*/
