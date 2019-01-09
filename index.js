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

function destructivelyPrependDriver(name) {
	drivers.unshift(name);
}

function appendDriver(name) {
	return newDrivers = [ ...drivers, name];
}

function prependDriver(name) {
	return newDrivers = [name, ...drivers];
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver () {
  return drivers.slice(1);
}
