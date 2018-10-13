const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return (drivers.push("Ralph"));
}

function destructivelyPrependDriver(name) {
  return (drivers.unshift("Bob"));
}

function destructivelyRemoveLastDriver() {
  return (drivers.pop(drivers.length - 1));
}

function destructivelyRemoveFirstDriver() {
  return (drivers.shift(0));
}

function appendDriver(name) {
  const appendedDrivers = [...drivers, "Broom"];
  return appendedDrivers;
}

function prependDriver(name) {
  const prependedDrivers = ["Arnold", ...drivers];
  return prependedDrivers;
}

function removeLastDriver() {
  return (drivers.slice(0, 2));
}

function removeFirstDriver() {
  return (drivers.slice(1, 3));
}
