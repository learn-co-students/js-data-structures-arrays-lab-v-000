const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name) {
  const newDrivers = [...drivers.slice(0), name];
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = [name, ...drivers.slice(0)];
  return newDrivers;
}

function removeLastDriver() {
  const newDrivers = drivers.slice(0, drivers.length-1);
  return newDrivers;
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(1);
  return newDrivers;
}
