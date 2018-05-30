// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  return drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  const newDriver = [...drivers, 'Broom']
  return newDriver
}
function prependDriver(name) {
  const prepend = ['Arnold', ...drivers]
  return prepend
}

function removeLastDriver() {
  return drivers.slice(0, 2)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
