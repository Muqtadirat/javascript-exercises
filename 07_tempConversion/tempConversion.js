const convertToCelsius = function (temp) {
  let celsius = (temp - 32) * 5 / 9;

    let celsiusDecimal = Number(celsius.toFixed(1))
  return celsiusDecimal
};

const convertToFahrenheit = function (temp) {
  let fahrenheit = (temp * 9) / 5 + 32;

  let fahrenheitDecimal = Number(fahrenheit.toFixed(1))

  return fahrenheitDecimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
