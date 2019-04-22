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

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const appendDrivers = [...drivers, name]
  return appendDrivers
}

function prependDriver(name) {
  const prependDrivers = [name, ...drivers]
  return prependDrivers
}

function removeLastDriver() {
   const lastDriver = drivers.slice(0,drivers.length - 1)
   return lastDriver
}

function removeFirstDriver() {
   const firstDriver = drivers.slice(1)
   return firstDriver
}