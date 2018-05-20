// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph")
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver() {
  let result 
  result = [...drivers, "Broom"]
  return result
}

function prependDriver() {
  let result
  result = ["Arnold", ...drivers]
  return result
}

function removeLastDriver() {
   let result = drivers.slice(0, drivers.length - 1)
   return result
}

function removeFirstDriver() {
  let result = drivers.slice(1)
  return result
}