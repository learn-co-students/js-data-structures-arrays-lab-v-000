const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
   drivers.pop(name);
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(name);
}

function appendDriver(name){
  const driver = [...drivers, name];
  return driver;
}

function prependDriver(name) {
  const driver = [name, ...drivers];
  return driver;
}

function removeLastDriver(){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.pop();
  return copyOfDrivers;
}

function removeFirstDriver(){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.shift();
  return copyOfDrivers;
}
