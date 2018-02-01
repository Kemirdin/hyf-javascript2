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
console.log (addBinaryResult);
