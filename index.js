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
  const appendedDrivers = [...drivers, name];
  return appendedDrivers;
}

function prependDriver(name) {
  const prependedDrivers = [name, ...drivers];
  return prependedDrivers;
}

function removeLastDriver() {
  const lastDriverRemoved = drivers.slice(0, 2);
  return lastDriverRemoved;
}

function removeFirstDriver() {
  const firstDriverRemoved = drivers.slice(-2);
  return firstDriverRemoved;
}
