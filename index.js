// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
	drivers.push('Ralph');
}
	
function destructivelyPrependDriver(name) {
	drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
	drivers.pop()
} 

function destructivelyRemoveFirstDriver() {
	drivers.shift()
}

function appendDriver(name) {
	const copyOfDrivers = drivers.slice();
	copyOfDrivers.push(name);
	return copyOfDrivers;
}

function prependDriver(name) {
	const copyOfDrivers = drivers.slice();
	copyOfDrivers.unshift(name);
	return copyOfDrivers;
}

function removeLastDriver() {
	const copyOfDrivers = drivers.slice()
	copyOfDrivers.pop();
	return copyOfDrivers;
}

function removeFirstDriver() {
	const copyOfDrivers = drivers.slice()
	copyOfDrivers.shift();
	return copyOfDrivers;
}