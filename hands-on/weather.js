'use strict';

function toCelcius (degreesFahrenheit) {
  return (degreesFahrenheit - 32) * 5 / 9;
}

function toFahrenheit (degreesCelcius) {
  return degreesCelcius * 9 / 5 + 32;
}

function weatherReport (city, degrees, unit, reporterFn) {
  // let city = 'Amsterdam';
  // let degrees = 3;
  // let unit = 'C';
  // let reportFn = console.log
  let newDegrees;
  let newUnit;
  if (unit === 'F') {
    newDegrees = toCelcius (degrees);
    newUnit = 'C';
  } else {
    newDegrees = toFahrenheit (degrees);
    newUnit = 'F';
  }
  const text = `The temperature in ${city} is ${newDegrees.toFixed (1)}°${newUnit}.`;
  reporterFn (text);
}
