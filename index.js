// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift(name);
}

function appendDriver(name) {
  const newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  return drivers.slice(0,2);
}

function removeFirstDriver() {
  return drivers.slice(-2);
}
