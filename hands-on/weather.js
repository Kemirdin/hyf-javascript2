'use strict';
function toCelcius (degreesFahrenheut) {
  //   let cTemp = celsius;
  //   let cToFahr = cTemp * 9 / 5 + 32;
  //   let message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
  //   console.log (message);
  return (degreesFahrenheut - 32) * (5 / 9);
}

function toFahrenheut (degreesCelsius) {
  //   let fTemp = fahrenheit;
  //   let fToCel = (fTemp - 32) * 5 / 9;
  //   let message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
  //   console.log (message);
    return (degreesCelsius * (9 / 5) + 32);
}
console.log(`the temperature in new york is ${toCelcius(44).toFixed(2)} c`);
console.log(`the temperature in Amsterdam is ${toFahrenheut(3).toFixed(2)} F`);


let toCelcius = (degreesFahrenheut)=>  (degreesFahrenheut - 32) * (5 / 9);
let toFahrenheut = (degreesCelsius) => (degreesCelsius * (9 / 5) + 32);
function weatherReport(city, digress, unit, reporterFn) {
  if (unit==='C')
    return `the temperature in ${city} is ${reporterFn(digress).toFixed(2)} F`
  else
  return   `the temperature in ${city} is ${reporterFn (digress).toFixed (2)} C`;

}