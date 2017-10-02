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
  let asdf = [...drivers, name]
  return asdf
}

function prependDriver(name){
  let asdf = [name, ...drivers]
  return asdf
}

function removeLastDriver(){
  let l = drivers.length - 1
  return drivers.slice(0,l)
}

function removeFirstDriver(){
  let l = drivers.length
  return drivers.slice(1,l)
}
