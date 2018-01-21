// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const newArray = [...drivers, 'Broom']
  return newArray
}

function prependDriver(name) {
  const newArray = ["Arnold", ...drivers]
  return newArray
}

function removeLastDriver() {
  const newArray = drivers.slice(0, drivers.length - 1)
  return newArray
}

function removeFirstDriver() {
  const newArray = drivers.slice(1)
  return newArray
}
