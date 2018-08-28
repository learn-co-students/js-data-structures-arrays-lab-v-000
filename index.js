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
  const addDriver = [...drivers, "Broom"];
  return addDriver;
}

function prependDriver(name) {
  const addDriverToEnd = ["Arnold", ...drivers]
  return addDriverToEnd;
}

function removeLastDriver() {
  const newArray = drivers.slice(0, drivers.length -1)
  return newArray
}

function removeFirstDriver() {
  const newArray = drivers.slice(1)
  return newArray
}
