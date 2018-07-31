// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}


function appendDriver(name){
  let newDivers = [...drivers, name]
  return newDivers
}

function prependDriver(name){
  let newDriver = [name, ...drivers]
  return newDriver
}


function removeLastDriver(){
  let lastDriver = drivers.slice(0,2)
  return lastDriver
}

function removeFirstDriver(){
  let firstDriver = drivers.slice(1)
  return firstDriver
}
