// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
  return drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
  return drivers.unshift(driver);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(driver) {
  return drivers.concat(driver);
}

function prependDriver(driver) {
  return [driver, ...drivers];
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
