"use strict";

function capitalize(a) {
  return a.toUpperCase();
}

function reverseString(a) {
  return a.split("").reverse().join("");
}

var calculator = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  }
};
module.exports = {
  calculator: calculator,
  reverseString: reverseString,
  capitalize: capitalize
};