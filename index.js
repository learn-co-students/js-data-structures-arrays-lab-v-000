// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver (name) {
  const moreDrivers = [...drivers, name];
  return moreDrivers;
}

function prependDriver (name) {
  const addFirstDrivers = [name, ...drivers];
  return addFirstDrivers;
}

function removeLastDriver () {
  const fewerDrivers = drivers.slice(0, 2);
  return fewerDrivers;
}

function removeFirstDriver () {
  const lessDrivers = drivers.slice(1);
  return lessDrivers;
}
