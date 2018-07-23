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

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}

function appendDriver(name) {
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.push(name);
  return copyOfDrivers;
}

function prependDriver(name) {
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.unshift(name);
  return copyOfDrivers;
}
