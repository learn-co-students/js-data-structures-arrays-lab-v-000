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
  const d = [...drivers, name]
  return d
}

function prependDriver(name) {
  const d = [name, ...drivers]
  return d
}

function removeLastDriver(name) {
  const d = drivers.slice(0,-1)
  return d
}

function removeFirstDriver() {
  const d = drivers.slice(1)
  return d
}
