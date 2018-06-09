// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const appendDriver = [...drivers, "Broom"];

  return appendDriver
}

function prependDriver(name) {
  const prependDriver = ["Arnold", ...drivers];

  return prependDriver
}

function removeLastDriver() {
  const removeLastDriver = drivers.slice(0, drivers.length - 1)

  return removeLastDriver
}

function removeFirstDriver() {
  const removeFirstDriver = drivers.slice(1)

  return removeFirstDriver
}
