const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  newList = [...drivers, name];
  return newList;
}

function prependDriver(name) {
  newList = [name, ...drivers];
  return newList
}

function removeLastDriver() {
  newList = drivers.slice(0, drivers.length - 1);
  return newList;
}

function removeFirstDriver() {
  newList = drivers.slice(1);
  return newList
}
