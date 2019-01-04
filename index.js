const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(-1);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(0);
}

function appendDriver(name) {
  const copyOfDrivers = [...drivers, name];
  return copyOfDrivers;
}

function prependDriver(name) {
  const copyOfDrivers = [name, ...drivers];
  return copyOfDrivers;
}

function removeLastDriver() {
  const copyOfDrivers = drivers.slice(0, -1);
  return copyOfDrivers;
}

function removeFirstDriver() {
  const copyOfDrivers = drivers.slice(1);
  return copyOfDrivers;
}
