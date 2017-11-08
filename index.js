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

function appendDriver(name) {
  const newdrivers = [...drivers, name];

  return newdrivers;
}

function prependDriver(name) {
  newdrivers = [name, ...drivers];

  return newdrivers;
}

function removeLastDriver(){
  newdrivers = drivers.slice(0, drivers.length - 1);

  return newdrivers;
}

function removeFirstDriver(){
  newdrivers = drivers.slice(1);

  return newdrivers;
}
