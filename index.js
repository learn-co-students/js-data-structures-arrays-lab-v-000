// Write your solution here!

// assign an initial value of ["Milo", "Otis", "Garfield"] to an array
const drivers = ["Milo", "Otis", "Garfield"];

// appends a driver to the end of the array
function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

// prepends a driver to the beginning of the array
function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

// removes the last driver from the array
function destructivelyRemoveLastDriver() {
  drivers.pop();
}

// removes the First driver from the array
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

// appends a driver to the array and returns
// a new array, leaving the original array unchanged
function appendDriver(name) {
  const newArray = [...drivers, name];
  return newArray;
}

// prepends a driver to the array and returns
// a new array, leaving the original array unchanged
function prependDriver(name) {
  const newArray = [name, ...drivers];
  return newArray;
}

// removes the last driver from the array and returns
// a new array, leaving the original array unchanged
function removeLastDriver() {
  const newArray = drivers.slice(0, drivers.length - 1);
  return newArray;
}

// removes the first driver from the array and returns
// a new array, leaving the original array unchanged
function removeFirstDriver() {
  const newArray = drivers.slice(1);
  return newArray;
}
