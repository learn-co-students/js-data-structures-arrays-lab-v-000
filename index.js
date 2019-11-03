// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push('Ralph')
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
  let newDrivers = [...drivers, name]
  return newDrivers
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers]
  return newDrivers
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
