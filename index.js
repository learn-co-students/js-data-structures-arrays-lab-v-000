// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name){
  const newDrivers = [...drivers.slice(), name];
  return newDrivers;
}

function prependDriver(name){
  const newDrivers = [name, ...drivers.slice()];
  return newDrivers;
}

function removeLastDriver() {
  const newDrivers = drivers.slice(0, -1);
  return newDrivers;
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(1);
  return newDrivers;
}
