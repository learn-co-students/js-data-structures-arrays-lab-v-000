// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (driverName) {
  drivers.push(driverName);
}

function destructivelyPrependDriver (driverName) {
  drivers.unshift(driverName);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver (driverName) {
  return [...drivers, driverName];
}

function prependDriver (driverName) {
  return [driverName, ...drivers];
}

function removeLastDriver () {
  return drivers.slice(0,-1);
}

function removeFirstDriver () {
  return drivers.slice(1);
}
