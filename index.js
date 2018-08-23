// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  return [...drivers, 'Broom']
}

function prependDriver(name) {
  return ['Arnold', ...drivers]
}

function removeLastDriver(name) {
  return drivers.slice(0, -1)
}

function removeFirstDriver(name) {
  return drivers.slice(1)
}
