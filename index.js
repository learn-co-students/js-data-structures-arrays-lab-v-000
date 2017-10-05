// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
	return drivers.push(name);
}

function destructivelyPrependDriver(name) {	
	return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
	drivers.pop();
	return drivers;
}

function destructivelyRemoveFirstDriver() {
	drivers.shift();
	return drivers;
}

function appendDriver(name) {
	const allDrivers = [...drivers, name];
	return allDrivers;
}


function prependDriver(name) {
	const allDrivers = [name, ...drivers];
	return allDrivers
}

function removeLastDriver() {
	return drivers.slice(0, -1);
}

function removeFirstDriver() {
	return drivers.slice(1)
}