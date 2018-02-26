const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return drivers.push("Ralph")
}

function destructivelyPrependDriver(name){
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  return drivers.pop(-1)
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift(0)
}

function appendDriver(name){
  return [...drivers, name]
}

function prependDriver(name){
  return [name, ...drivers]
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
