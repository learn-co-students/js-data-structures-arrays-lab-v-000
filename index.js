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
  let updatedDrivers = [...drivers, name];
  return updatedDrivers;
}

function prependDriver(name) {
  let updatedDrivers = [name, ...drivers];
  return updatedDrivers;
}

function removeLastDriver() {
  let updatedDrivers = drivers.slice(0, drivers.length - 1);
  return updatedDrivers;
}

function removeFirstDriver() {
  let updatedDrivers = drivers.slice(1);
  return updatedDrivers;
}
