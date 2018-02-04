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
