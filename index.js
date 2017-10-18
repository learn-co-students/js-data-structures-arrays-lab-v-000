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
  const members = [...drivers, name]
  return members
}

function prependDriver(name) {
  const members = [name, ...drivers]
  return members
}

function removeLastDriver() {
  const members = drivers.slice(0, -1)
  return members
}

function removeFirstDriver() {
  const members = drivers.slice(1)
  return members
}
