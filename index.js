// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}
function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(Drivers) {
  return drivers.pop();
}
function destructivelyRemoveFirstDriver(Drivers) {
  return drivers.shift();
}
function appendDriver(name){
  return [...drivers, name]
}

function prependDriver(name){
  return [name, ...drivers]
}

function removeLastDriver(Driver) {
  var newArray = drivers.slice(0, drivers.length - 1);
  return newArray;
}
function removeFirstDriver(Driver) {
  var newArray = drivers.slice(1);
  return newArray;
}
