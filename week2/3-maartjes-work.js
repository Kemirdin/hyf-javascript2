// ...

let tasks = monday.concat (tuesday);

const hourlyRate = 42.45;

const total = tasks
  .map (task => task.duration / 60)
  .filter (duration => duration < 2)
  .map (duration => duration * hourlyRate)
  .reduce ((wage, amount) => wage + amount, 0)
  .toFixed (2);

console.log (`Maartje has earned €${total}`);
