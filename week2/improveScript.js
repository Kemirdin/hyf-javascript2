let monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

let tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

let tasks = monday.concat (tuesday);

/*Collect two days' worth of tasks. Array.concat ();*/

console.log(tasks);

const hourDurations = tasks.map(task => {
    return task.duration / 60;
});

console.log(hourDurations);

const shortDurations = hourDurations.filter(duration => {
    return duration >= 2;
});
console.log(shortDurations);

const amounts = shortDurations.map(duration =>  {
    return duration * 50  });
console.log(amounts);

let totalInEuros = 0;
amounts.forEach(amount =>{
    return '€' + amount.toFixed (2);
  });
console.log(totalInEuros);



