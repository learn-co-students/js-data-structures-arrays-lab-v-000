// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let newDrivers = [...drivers, name];
 return newDrivers;
}

function prependDriver(name) {
 let newDrivers = [name,...drivers];
 return newDrivers;
}

function removeLastDriver() {
  let newDrivers = drivers.slice(0, drivers.length - 1);
  return newDrivers;
}

function removeFirstDriver() {
  let newDrivers = drivers.slice(1);
  return newDrivers;
}



