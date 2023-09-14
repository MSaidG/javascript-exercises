const add = function(num1, num2) {
	
  return num1 + num2;
};

const subtract = function(num1, num2) {
	
  return num1 - num2;
};

const sum = function(arr) {
	
  let sum = 0;
  arr.forEach(element => {

    sum += element;
  });

  return sum;
};

const multiply = function(arr) {

  let multiply = 1;
  arr.forEach(element => {

    multiply *= element;
  });

  return multiply;
};

const power = function(num1, num2) {
	
  return num1 ** num2;
};

const factorial = function(num) {
	
  let result = 1;

  if (num === 0 || num === 1) return 1;

  for (num; num > 1; num--)
  {
    result *= num;
  }

  return result;
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
