// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  const name = drivers.push("Ralph")
}

function destructivelyPrependDriver(){
  const name = drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(){
 return newDriver = [...drivers, "Broom"];
}

function prependDriver(){
  return newDriver = ["Arnold", ...drivers]
}

function removeLastDriver(){
  return newDriver = drivers.slice(0,drivers.length - 1)
}

function removeFirstDriver(){
  return newDriver = drivers.slice(1)
}