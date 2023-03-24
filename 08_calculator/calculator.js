const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
	return a.reduce((total, current) => total + current, 0);
};

const multiply = function(a) {
  return a.reduce((product, current) => product * current, 1);
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  let fact = 1;
	while (a != 0)
  {
    fact *= a;
    a = a - 1;
  }
  return fact;
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
