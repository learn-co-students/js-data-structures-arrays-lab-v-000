// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  let newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  return drivers.slice(0, 2);
}

function removeFirstDriver(name) {
  return drivers.slice(-2);
}








