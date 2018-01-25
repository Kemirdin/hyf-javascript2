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
  } );
const shortDurations = hourDurations.filter(duration => {
    return duration >= 2;
  });
const amounts = shortDurations.map(duration =>  {
    return duration * 50  });


let totalInEuros = 0;
amounts.forEach(amount => ...);
console.log(...);

products.forEach (product => {
  product.sizes.forEach (size => {
    console.log (size);
  });
});


 let totalInEuros= amounts.map (function (dollar_amount) {
    return '$' + dollar_amount.toFixed (2);
  })
  .reduce (function (formatted_dollar_amount) {
    return formatted_dollar_amount;
  });




// Convert the task durations to hours, instead of minutes.

let getHour = tasks.filter(function (number) {
    return number>0  !== 0;
}).map((number) => {
   
    /* let hours = Math.floor (duration / 60);*/
  
    return hours = Math.trunc(number / 60) // I used Math.trunc(), which is a new method added in 2015.
    minutes = number % 60;
})
  console.log (hours + ':' + minutes);

// or  Convert the task durations to hours, instead of minutes.

let getHour = tasks.map((task) => {
    return (task.duration / 60);
})
console.log(getHour);

//Filter out everything that took two hours or more (remove from the collection)

let tookHour = tasks.filter((duration) => {
    return duration >= 2;
})
console.log(tookHour);

//Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.

let currentValue= tasks.map((duration) =>{
                    return duration * 50;
}).reduce( (accumulator, currentValue)=> {
                    return [(+accumulator) + (+current)+'€';
];
})
    console.log(currentValue + '€');




