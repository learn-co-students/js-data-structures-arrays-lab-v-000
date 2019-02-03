const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
  return drivers;
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
  return drivers;
}

function appendDriver(name){
  const newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name){
  const newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver(){
  const newDrivers = drivers.slice(0,-1);
  return newDrivers;
}

function removeFirstDriver(){
  const newDrivers = drivers.slice(1);
  return newDrivers;
}
