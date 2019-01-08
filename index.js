// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop(drivers.length - 1)
}


function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name){
  const append = [...drivers, name]
  return append
}

function prependDriver(name) {
  const prepend = [name, ...drivers]
  return prepend
}
  
function removeLastDriver() {
  const removeLast = [...drivers.slice(0, drivers.length -1)] 
  return removeLast
}

function removeFirstDriver() {
  const last = [...drivers.slice(1)]
  return last
}
  
  