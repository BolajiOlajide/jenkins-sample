function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function isEven(x, y) {
  return x % 2 === 0
}

function multiply(x, y) {
  return x * y
}

module.exports = {
  add,
  subtract,
  isEven,
  multiply
}
