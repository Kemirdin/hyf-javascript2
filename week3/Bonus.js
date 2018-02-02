//Remove duplicate values from JS array [duplicate]


var names = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

var uniqueNames = [];

for (var i in names) {
  if (uniqueNames.indexOf (names[i]) === -1) {
    uniqueNames.push (names[i]);
  }
}
console.log(uniqueNames);