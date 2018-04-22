const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
  return drivers.shift(name);
}

function appendDriver(name){
  const appendDriver = [...drivers, name];
  return appendDriver
}

function prependDriver(name){
  const prependDriver = [name, ...drivers]
  return prependDriver
}

function removeLastDriver(name){
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(name){
  return drivers.slice(1);
}
