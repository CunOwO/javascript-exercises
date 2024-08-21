const add = function(operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(array) {
	const sumItem =  array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0); 
  return sumItem;
};

const multiply = function(array) {
  const multiplyItem = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return multiplyItem;
};

const power = function(operand1, operand2) {
  return Math.pow(operand1,operand2);
};

const factorial = function(item) {
  if (item === 0) return 1;
  let product = 1;
  for (let i = item; i > 0; i--) {
    product *= i;
  }
  return product;
  // if (item === 0 || item === 1) {
  //   return 1;
  // }
  // const array = [];
  // for (let i = 1; i <= item; i++) {
  //   array.push(i);
  // }
  // const factorialItem = array.reduce((total, currentItem) => {
  //   return total * currentItem;
  // }, 1);
  // return factorialItem;
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
