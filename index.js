const drivers =  ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) { 
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) { 
  drivers.shift(name);
}

function appendDriver(name) { 
  newDrivers = drivers.concat(name);
  return newDrivers; 
}

function prependDriver(name) { 
  newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  newDrivers = drivers.slice(0, -1);
  return newDrivers;
}
  
function removeFirstDriver() { 
  newDrivers = drivers.slice(1); 
  return newDrivers; 
}
