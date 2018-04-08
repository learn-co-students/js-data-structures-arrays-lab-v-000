const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver (name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver (name) {
  drivers.shift(name)
}

function appendDriver (name) {
  return [...drivers, name]
}

function prependDriver (name) {
  return [name, ...drivers]
}

function removeLastDriver () {
  let newDrivers = drivers.slice();
  newDrivers.pop();
  return newDrivers;
}

function removeFirstDriver () {
  let newDrivers = drivers.slice();
  newDrivers.shift();
  return newDrivers;
}
