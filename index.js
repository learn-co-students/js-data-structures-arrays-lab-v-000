// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop(-1)
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(0);
}

function appendDriver(name) {
  let newArray = drivers.slice();
  newArray.push(name);
  return newArray;
}

function prependDriver(name) {
  let newArray = drivers.slice();
  newArray.unshift(name);
  return newArray;
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(){
  return drivers.slice(1)
}
