// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  const newDriver = [...drivers, name];
  return newDriver;
}

function prependDriver(name) {
  const newDriver = [name, ...drivers];
  return newDriver;
}

function removeLastDriver(name) {
  newDrivers = drivers.slice(0,2);
  return newDrivers;
}

function removeFirstDriver(name) {
  newDrivers = drivers.slice(1);
  return newDrivers;
}
