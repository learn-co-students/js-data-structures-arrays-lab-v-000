// Write your solution here!
const drivers=["Milo","Otis","Garfield"]
let newDrivers

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
   return newDrivers=[...drivers,name]
  //return newDrivers
}

function prependDriver(name){
  return newDrivers=[name,...drivers]
  //return newDrivers
}

function removeLastDriver(){
  return newDrivers=drivers.slice(0,drivers.length-1)
  //return newDrivers
}

function removeFirstDriver(){
  return newDrivers=drivers.slice(1,drivers.length)
  //return newDrivers
}
