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

function appendDriver (name) {
  const array = [...drivers, name];
  return array
}

function prependDriver (name) {
  const array = [name, ...drivers];
  return array
}

function removeLastDriver (name) {
  const array = drivers.slice(0, drivers.length-1);
  return array
}

function removeFirstDriver (name) {
  const array = drivers.slice(1)
  return array
}
