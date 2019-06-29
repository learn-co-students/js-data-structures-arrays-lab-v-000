// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
 return drivers.push(name)
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift()
}

function appendDriver(name){
    return drivers.concat(name)
}

function prependDriver(name){
    driversNew = [name,...drivers]
    return driversNew
}

function removeFirstDriver(){
    return drivers.slice(1)
}

function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1)
}
