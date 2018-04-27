// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function appendDriver(name) {
  return [...drivers.slice(0, 3), name]
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function prependDriver(name) {
  return [name, ...drivers.slice(0, 3)]
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  drivers
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  drivers
}

function removeLastDriver() {
  return drivers.slice(0, 2)
}

function removeFirstDriver() {
  return drivers.slice(1, 3)
}
