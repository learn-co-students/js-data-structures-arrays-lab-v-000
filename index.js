const drivers = ['Milo', 'Otis', 'Garfield'];

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
  let appendedDrivers = [...drivers, name];
  return appendedDrivers;
}

function prependDriver(name) {
  let prependedDrivers = [name, ...drivers];
  return prependedDrivers;
}

function removeLastDriver() {
  let removedLastDriver = drivers.slice(0, -1);
  return removedLastDriver;
}

function removeFirstDriver() {
  let removedFirstDriver = drivers.slice(1);
  return removedFirstDriver;
}
