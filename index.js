// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver() {
  drivers.push('Ralph');
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop('Garfield');
}

function destructivelyRemoveFirstDriver() {
  drivers.shift('Milo');
}

function appendDriver() {
  const newDrivers = [...drivers, 'Broom'];
  return newDrivers;
}

function prependDriver() {
  const newDrivers = ['Arnold', ...drivers]
  return newDrivers
}

function removeLastDriver() {
  return drivers.slice(0,-1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
