// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  newDrivers = [...drivers, name]
  return newDrivers
}

function prependDriver(name) {
  newDrivers = [name, ...drivers]
  return newDrivers
}

function removeLastDriver(name) {
  newDrivers = drivers.slice(0, drivers.length -1)
  return newDrivers
}

function removeFirstDriver(name) {
  newDrivers = drivers.slice(1)
  return newDrivers
}