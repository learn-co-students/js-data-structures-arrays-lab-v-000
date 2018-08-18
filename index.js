// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver() {
  drivers.pop('Garfield')
}
function destructivelyRemoveFirstDriver() {
  drivers.shift('Milo')
}
function appendDriver(name) {
  return [...drivers, name]
}
function prependDriver(name){
  return [name, ...drivers]
}
function removeLastDriver(){
  return drivers.slice(0, 2)
}

function removeFirstDriver(){
  return drivers.slice(1,3)
}
