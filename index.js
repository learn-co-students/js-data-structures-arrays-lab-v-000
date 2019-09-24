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
  const appendDriver = [...drivers, name];
  return appendDriver;
}

function prependDriver(name) {
  const prependDriver = [name, ...drivers];
  return prependDriver;
}

function removeLastDriver() {
  const removeLastDriver = drivers.slice(0, -1);
  return removeLastDriver;
}

function removeFirstDriver() {
  const removeFirstDriver = drivers.slice(1);
  return removeFirstDriver;
}
