// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  return newDrivers = [...drivers, name];
}

function prependDriver(name) {
  return newDrivers = [name, ...drivers];
}

function removeLastDriver() {
  return newDrivers = drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return newDrivers = drivers.slice(1, drivers.lenth);
}
