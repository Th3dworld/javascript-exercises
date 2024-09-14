const add = function(...args) {
  let sum = 0;

  args.forEach(element => sum += element);

  return sum;
};

const subtract = function(...args) {
	let difference = args[0];

  for(let i = 1; i < args.length; i++){
    difference -= args[i];
  }

  return difference;
};

const sum = function(args) {
	let sum = 0;

  args.forEach(element => sum += element);

  return sum;
};

const multiply = function(args) {
  let product = 1;
  
  args.forEach(element => product *= element);

  return product;
};

const power = function(base, exponent) {
  return Math.pow(base,exponent);
};

const factorial = function(number) {
	if(number === 0){
    return 1;
  }else{
    return number * factorial(number - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
