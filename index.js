// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  drivers.push("Ralph")
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  const aDrivers = [...drivers, name]
  return aDrivers
}

function prependDriver(name){
  const pDrivers = [name, ...drivers]
  return pDrivers
}

function removeLastDriver(){
  return drivers.slice(0, (drivers.length -1))
}

function removeFirstDriver(){
  return drivers.slice(1, (drivers.length))
}
