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
  return newDrivers = [...drivers, name]
}

 function prependDriver(name){
  return newDrivers = [name, ...drivers]
}

 function removeLastDriver(){
  return newDrivers = drivers.slice(0, -1)
}

 function removeFirstDriver(){
  return newDrivers = drivers.slice(1)
}