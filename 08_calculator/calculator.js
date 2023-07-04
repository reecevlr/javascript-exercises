const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	total = arr.reduce((sum, num) => {
    return sum += num;
  }, 0);

  return total;
};

const multiply = function(arr) {
  product = arr.reduce((prod, num) => {
    return prod *= num;
  });

  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  }
  else if (num === 0) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
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
