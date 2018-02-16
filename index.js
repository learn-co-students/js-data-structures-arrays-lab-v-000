// Write your solution here!
const drivers= ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
  return drivers
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
  return drivers
}
function appendDriver(name){
  let newdrivers= [...drivers,name]
  return newdrivers
}
function prependDriver(name){
  let newdrivers= [name, ...drivers]
  return newdrivers
}
function removeLastDriver(){
  newdrivers= drivers.slice(0,-1)
  return newdrivers
}
function removeFirstDriver(){
  let newdrivers= drivers.slice(1)
  return newdrivers
}
