// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

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
  const newDriversArray = [...drivers, name]
  return newDriversArray;
}

function prependDriver(name) {
  const newDriversArray = [name, ...drivers]
  return newDriversArray;
}

function removeLastDriver() {
  const newDriversArray = drivers.slice(0, drivers.length - 1)
  return newDriversArray;
}

function removeFirstDriver() {
  const newDriversArray = drivers.slice(1, drivers.length)
  return newDriversArray;
}
