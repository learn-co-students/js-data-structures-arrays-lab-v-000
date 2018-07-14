// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  const members = [...drivers, name]
  return members;
}

function prependDriver(name) {
  const members = [name, ...drivers]
  return members;
}

function removeLastDriver(name) {
  const members = drivers.slice(0, drivers.length-1)
  return members;
}

function removeFirstDriver(name) {
  const members = drivers.slice(1)
  return members;
}
