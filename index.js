// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

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
  const newDrivers = [...drivers]
  newDrivers.push(name)
  return newDrivers
}

function prependDriver(name) {
  const newDrivers = [...drivers]
  newDrivers.unshift(name)
  return newDrivers
}

function removeLastDriver(name) {
  const newDrivers = [...drivers]
  newDrivers.pop(name)
  return newDrivers
}

function removeFirstDriver(name) {
  const newDrivers = [...drivers]
  newDrivers.shift(name)
  return newDrivers
}
