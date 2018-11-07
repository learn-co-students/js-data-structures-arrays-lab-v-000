// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let appendedDrivers = [...drivers, name];
  return appendedDrivers
}

function prependDriver(name) {
  let prependedDrivers = [name, ...drivers]
  return prependedDrivers
}

function removeLastDriver() {
  let remainingDrivers = drivers.slice(0, drivers.length - 1);
  return remainingDrivers;
}

function removeFirstDriver() {
  let remainingDrivers = drivers.slice(1);
  return remainingDrivers;
}
