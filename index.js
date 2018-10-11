// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
let moreDrivers
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
  return moreDrivers = [...drivers, name]
}

function prependDriver(name) {
  return moreDrivers = [name, ...drivers]
}

function removeLastDriver() {
  return moreDrivers = drivers.slice(0,2)
}

function removeFirstDriver() {
  return moreDrivers = drivers.slice(1)
}
