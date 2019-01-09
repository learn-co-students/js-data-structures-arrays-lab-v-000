// Write your solution here!
const drivers =["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  newDrivers=drivers.slice();
  newDrivers.push(name);
  return newDrivers;
}

function prependDriver(name) {
  newDrivers=drivers.slice()
  newDrivers.unshift(name);
  return newDrivers;
}

function removeLastDriver() {
  newDrivers=drivers.slice()
  newDrivers.pop(name);
  return newDrivers;
}

function removeFirstDriver() {
  newDrivers=drivers.slice()
  newDrivers.shift(name);
  return newDrivers;
}
