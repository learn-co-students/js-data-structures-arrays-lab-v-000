// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driverName) {
  drivers.push(driverName)
};

function destructivelyPrependDriver(driverName) {
  drivers.unshift(driverName)
};

function destructivelyRemoveLastDriver(driverName) {
  drivers.pop(driverName)
};

function destructivelyRemoveFirstDriver(driverName) {
  drivers.shift(driverName)
};

function appendDriver(driverName) {
  return [...drivers, driverName]
};

function prependDriver(driverName) {
  return [driverName, ...drivers]
};

function removeLastDriver() {
  return drivers.slice(0, drivers.length -1)
};

function removeFirstDriver() {
  return drivers.slice(1)
};
