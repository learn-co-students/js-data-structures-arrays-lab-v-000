const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeFirstDriver() {
  return drivers.slice(1);
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}