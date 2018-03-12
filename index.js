// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

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

function appendDriver(name) {
  new_array = [...drivers, name]
  return new_array
}

function prependDriver(name) {
  new_array = [name, ...drivers]
  return new_array
}

function removeLastDriver(name) {
  new_array = drivers.slice(0, drivers.length-1)
  return new_array
}

function removeFirstDriver(name) {
  new_array = drivers.slice(1)
  return new_array
}
