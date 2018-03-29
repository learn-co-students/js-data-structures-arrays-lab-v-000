// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.splice(-1)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(0)
}

function appendDriver(name) {
  const newDrivers = drivers.slice();
  newDrivers.push(name)
  return newDrivers
}

function prependDriver(name) {
  const newDrivers = drivers.slice()
  newDrivers.unshift(name)
  return newDrivers
}

function removeLastDriver() {
  const newDrivers = drivers.slice(0, 2)
  return newDrivers
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(1, 3)
  return newDrivers
}