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
  const newDrivers = drivers.slice();
  newDrivers.push(name);
  return newDrivers;
}

function prependDriver(name) {
  const prependDrivers = [name, ...drivers.slice()];
  return prependDrivers;
}

function removeLastDriver() {
  const removeLast = drivers.slice(0, -1);
  return removeLast;
}

function removeFirstDriver() {
  const removeFirst = drivers.slice(1);
  return removeFirst;
}
