const convertToCelsius = function(tempInFarhenheits) {
  if(tempInFarhenheits === 32) return 0;

  let tempInCelsius = parseFloat(((tempInFarhenheits - 32) * (5/9)).toFixed(1));
  return tempInCelsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  if(tempInCelsius === 0) return 32;

  let tempInFarhenheits =parseFloat(((tempInCelsius * (9/5))+32).toFixed(1));
  return tempInFarhenheits ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
