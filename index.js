 const drivers =  ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver(name) {
    return drivers.push(name)
}

 function destructivelyAppendDriver(name) {
   return drivers.push(name)
}

function destructivelyPrependDriver(name) {
 drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
 drivers.pop()
}


function destructivelyRemoveFirstDriver() {
 drivers.shift()
}

function appendDriver(name) {
  newDriver =  [...drivers, name]
  return newDriver
}

function prependDriver(name) {
  newDriver =  [name, ...drivers]
  return newDriver
}

function removeLastDriver() {
   removelstDriver = drivers.slice(0, drivers.length - 1)
   return removelstDriver
}

function removeFirstDriver() {
   removefrstDriver = drivers.slice(1)
   return removefrstDriver
}
