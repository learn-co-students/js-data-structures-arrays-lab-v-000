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
  let newarray = [...drivers]
  newarray.push(name)
  return newarray
}
function prependDriver(name) {
  let newarray = [...drivers]
  newarray.unshift(name)
  return newarray
}
function removeLastDriver() {
  let newarray = [...drivers]
  newarray.pop()
  return newarray
}
function removeFirstDriver() {
  let newarray = [...drivers]
  newarray.shift(name)
  return newarray
}
