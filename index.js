// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
// const copyOfDrivers;

function destructivelyAppendDriver(name) {
  drivers.push(name)
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
 newDrivers = [ ...drivers, name];
 return newDrivers
}

function prependDriver(name) {
 newDrivers = [name, ...drivers];
 return newDrivers
}

function removeLastDriver() {
 copyOfDrivers = drivers.slice();
 copyOfDrivers.pop()

return copyOfDrivers
}

function removeFirstDriver() {
  copyOfDrivers = drivers.slice();
  copyOfDrivers.shift()

 return copyOfDrivers
}
