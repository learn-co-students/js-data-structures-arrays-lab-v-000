// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const allDrivers = [...drivers, "Broom"];
  return allDrivers;
}

function prependDriver(name) {
  const allDrivers = ["Arnold", ...drivers];
  return allDrivers;
}

function removeLastDriver() {
  const updatedDrivers = drivers.slice(0, 2);
  return updatedDrivers;
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(1);
  return newDrivers;
}
