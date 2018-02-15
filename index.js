const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const appendDrivers = [...drivers, name];
  return appendDrivers
}

function prependDriver(name) {
  const prependDrivers = [name, ...drivers]
  return prependDrivers
}

function removeLastDriver() {
  const removeLastDriver = drivers.slice(0, drivers.length - 1);
  return removeLastDriver
}

function removeFirstDriver() {
  const removeFirstDriver = drivers.slice(1)
  return removeFirstDriver
}



