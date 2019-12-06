// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newDriver = [...drivers, name]
  return newDriver;
}

function prependDriver(name){
  let newDriver = [name, ...drivers]
  return newDriver;
}

function removeLastDriver(){
  let newDrivers = drivers
  return newDrivers.slice(0, newDrivers.length - 1);
}

function removeFirstDriver(){
  let newDrivers = drivers
  return newDrivers.slice(1);
}
