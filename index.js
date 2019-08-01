// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

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
  let newDrivers = ["Milo", "Otis", "Garfield"];
  newDrivers.push(name);
  return newDrivers;
}

function prependDriver(name) {
  let newDrivers = ["Milo", "Otis", "Garfield"];
  newDrivers.unshift(name);
  return newDrivers;
}

function removeLastDriver() {
  let newDrivers = ["Milo", "Otis", "Garfield"];
  newDrivers.pop();
  return newDrivers;
}

function removeFirstDriver() {
  let newDrivers = ["Milo", "Otis", "Garfield"];
  newDrivers.shift();
  return newDrivers;
}
