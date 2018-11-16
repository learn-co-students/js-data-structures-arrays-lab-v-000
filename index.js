// Write your solution here!
const drivers = ["Milo","Otis","Garfield"]

function destructivelyAppendDriver(newDriver) {
  drivers.push(newDriver)
}

function destructivelyPrependDriver(newDriver) {
  drivers.unshift(newDriver)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const newDrivers = [...drivers]
  newDrivers.push(name)
  return newDrivers
}

function prependDriver(name){
  const newDrivers = [...drivers]
  newDrivers.unshift(name)
  return newDrivers
}

function removeLastDriver(){
  const newDrivers = drivers.slice(0, drivers.length -1 );
  return newDrivers
}

function removeFirstDriver(){
  const newDrivers = drivers.slice(1);
  return newDrivers
}
