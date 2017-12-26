// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  updatedArray = [...drivers, name]
  return updatedArray
}

function prependDriver(name) {
  updatedArray = [name, ...drivers]
  return updatedArray
}

function removeLastDriver() {
  updatedArray = drivers.slice(0, drivers.length - 1)
  return updatedArray
}

function removeFirstDriver(name) {
  updatedArray = drivers.slice(1)
  return updatedArray
}
