// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
  drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  appended = drivers.slice();
  appended.push(name);
  return appended
}

function prependDriver(name) {
  appended = drivers.slice();
  appended.unshift(name);
  return appended
}

function removeLastDriver() {
  appended = drivers.slice();
  appended.pop();
  return appended
}

function removeFirstDriver() {
  appended = drivers.slice();
  appended.shift();
  return appended
}
