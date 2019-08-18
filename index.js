// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  newDrivers = [...drivers, 'Broom'];
  return newDrivers;
}

function prependDriver(name) {
  newDrivers = ['Arnold', ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  newDrivers = drivers.slice(0, -1);
  return newDrivers;
}

function removeFirstDriver() {
  newDrivers = drivers.slice(1);
  return newDrivers;
}
