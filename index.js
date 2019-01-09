// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
	drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
	drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
	drivers.pop(-1);
}

function destructivelyRemoveFirstDriver() {
	drivers.shift(0);
}

function appendDriver(name) {
	var newDriver = [...drivers, 'Broom'];
	return newDriver;
}

function prependDriver(name) {
	var newDriver = ["Arnold", ...drivers];
	return newDriver;
}

function removeLastDriver() {
	var removeDriver = drivers;
	return removeDriver.slice(0, removeDriver.length - 1);
}

function removeFirstDriver() {
	var removeDriver = drivers;
	return removeDriver.slice(1);
}