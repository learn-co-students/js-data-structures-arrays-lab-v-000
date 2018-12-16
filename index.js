// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

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
  const moreDrivers = [...drivers, name]
  return moreDrivers
}

function prependDriver(name) {
  const moreDrivers = [name, ...drivers]
  return moreDrivers
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver() {
  return drivers.slice(1, drivers.length)
}
