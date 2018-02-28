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
   const new_array = [...drivers, name]
   return new_array
}

function prependDriver(name) {
  const new_array = [name, ...drivers]
  return new_array
}

function removeLastDriver() {
  const new_array = [...drivers]
  new_array.pop()
  return new_array
}

function removeFirstDriver() {
  const new_array = [...drivers]
  new_array.shift()
  return new_array
}
