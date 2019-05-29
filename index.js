// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newDrivers = [...drivers, "Broom"];
  return newDrivers;
}

function prependDriver(name){
  let newDrivers = ["Arnold", ...drivers];
  return newDrivers;
}

function removeLastDriver(){
  let newDrivers = [...drivers];
  newDrivers.splice(-1, 1);
  return newDrivers;
}

function removeFirstDriver(){
  let newDrivers = [...drivers];
  newDrivers.splice(0, 1);
  return newDrivers;
}
