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
  const newArray = [...drivers, name]
  return newArray
}

function prependDriver(name) {
  const anotherNewArray = [name, ...drivers]
  return anotherNewArray
}

function removeLastDriver() {
  return drivers.slice(0, -1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
