// Write your solution here!
const drivers = Array("Milo", "Otis", "Garfield")

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  new_drivers = [...drivers, name]
  return new_drivers
}

function prependDriver(name){
  new_drivers = [name, ...drivers]
  return new_drivers
}

function removeLastDriver(name){
  new_drivers = drivers.slice(0,-1)
  return new_drivers
}

function removeFirstDriver(name){
  new_drivers = drivers.slice(1)
  return new_drivers
}
