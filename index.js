// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
	drivers.push(name);
}

function destructivelyPrependDriver(name) {
	drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
	drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
	drivers.shift();
}

function appendDriver(name) {
	newdrivers = [...drivers, name];
	return newdrivers;
}

function prependDriver(name) {
	newerdrivers = [name, ...drivers];
	return newerdrivers;
}

function removeLastDriver(name) {
	return drivers.slice(0,2);
}

function removeFirstDriver(name) {
	return drivers.slice(1,3);
}