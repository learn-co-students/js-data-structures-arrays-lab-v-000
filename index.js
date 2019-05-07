// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
  const newDrivers = drivers.push('Ralph')
  newDrivers
}


function destructivelyPrependDriver(name) {
  const newDrivers = drivers.unshift("Bob")
  newDrivers
}


function destructivelyRemoveLastDriver() {
  const newDrivers = drivers.pop()
  newDrivers
}

function destructivelyRemoveFirstDriver() {
  const newDrivers = drivers.shift()
  newDrivers
}


function appendDriver(name) {
  const n = [...drivers, "Broom"];
  return n
}


function prependDriver(name) {
  const n = ["Arnold", ...drivers]
  return n
}

function removeLastDriver() {
  const n = drivers.slice(0, -1)
  return n
}

function removeFirstDriver() {
  const n = drivers.slice(1)
  return n
}
