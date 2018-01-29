// ...

let tasks = monday.concat (tuesday);

const hourlyRate = 42.45;

let total = 0;

tasks
  .map (task => task.duration / 60)
  .filter (duration => duration < 2)
  .map (duration => duration * hourlyRate)
  .forEach (amount => (total += amount));

console.log (`Maartje has earned €${total.toFixed (2)}`);
