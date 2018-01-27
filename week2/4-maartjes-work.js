// ...

let tasks = monday.concat (tuesday);

const hourlyRate = 42.45;
const toHours = task => task.duration / 60;
const lessThanTwo = num => num < 2;
const timesRate = rate => duration => duration * rate;
const add = (wage, amount) => wage + amount;

const total = tasks
  .map (toHours)
  .filter (lessThanTwo)
  .map (timesRate (hourlyRate))
  .reduce (add, 0)
  .toFixed (2);

console.log (`Maartje has earned €${total}`);
