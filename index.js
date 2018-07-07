// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(name){
  const coll = [...drivers, name]
  return coll
}
function prependDriver(name){
  const coll = [name, ...drivers]
  return coll
}
function removeLastDriver(){
  const coll = drivers.slice(0, drivers.length - 1)
  return coll
}
function removeFirstDriver(){
  const coll = drivers.slice(1)
  return coll
}
