// Write your solution here!
// I need to make a const variable drivers and give it the value of an array with values
const drivers = ["Milo", "Otis", "Garfield"];

// Create a function that adds a driver's name to the end of the array

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
};

// Add a driver's name to the beginning of the arrray
function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
};

// Remove the last driver from the drivers array
function destructivelyRemoveLastDriver() {
  drivers.splice(drivers.length - 1)
  return drivers
};

// Remove the first position from the drivers array
function destructivelyRemoveFirstDriver() {
  drivers.splice(0,1)
  return drivers
};

// Create a new array that adds a driver to the end of the new array
function appendDriver(name) {
  // How do I copy the array and not destruct it when I add onto the new array?
  let newDrivers = drivers.slice()
  newDrivers.push(name)
  return newDrivers
};

// Create a new array that adds a driver to the beginning of the new array and don't effect the original
function prependDriver(name) {
  let newDrivers = drivers.slice()
  newDrivers.unshift(name)
  return newDrivers
};

// Create a new array, remove the last driver in the new array, leave the original array untouched
function removeLastDriver() {
  let newDrivers = drivers.slice()
  newDrivers.splice(newDrivers.length - 1)
  return newDrivers
};

// Create a new array, remove the first driver in the new array, leave the original array untouched, and return the new array
function removeFirstDriver() {
  let newDrivers = drivers.slice()
  newDrivers.splice(0,1)
  return newDrivers
};
