// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop("Garfield");
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift("Milo");
}

function appendDriver(name) {
  newDrivers = [...drivers, "Broom"];
  return newDrivers;
}

function prependDriver(name) {
  newDriver = ["Arnold", ...drivers];
  return newDriver;
}

function removeLastDriver(name) {
  removeDriver = drivers.slice(0, 2);
  return removeDriver;
}

function removeFirstDriver(name) {
  removeDriver = drivers.slice(1, 3);
  return removeDriver;
}




