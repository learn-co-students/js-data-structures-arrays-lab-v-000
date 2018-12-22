// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(n){
  drivers.push(n)
}

function destructivelyPrependDriver(n){
  drivers.unshift(n)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(n){
  let x = [...drivers, n]
  return x
}

function prependDriver(n){
  let x = [n, ...drivers]
  return x
}

function removeLastDriver(){
  let x = drivers.slice(0, drivers.length-1)
  return x
}

function removeFirstDriver(){
  let x = drivers.slice(1)
  return x
}
