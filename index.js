// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

// appends a driver to the end of the drivers array
function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

// prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

// removes the last driver from the drivers
function destructivelyRemoveLastDriver(name) {
  return drivers.pop(name)
}

// removes the First driver from the drivers array
function destructivelyRemoveFirstDriver(name) {
  return drivers.shift(name)
}

// appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name) {
  return [...drivers, name];
}

// prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name) {
  return [name, ...drivers];
}

// removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

// removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver() {
  return drivers.slice(1, 3);
}
