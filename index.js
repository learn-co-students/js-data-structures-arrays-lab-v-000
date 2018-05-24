
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
	drivers.push(name);
}	

function destructivelyPrependDriver(name) {
	drivers.unshift('Bob');
}	

function destructivelyRemoveLastDriver() {
	drivers.pop();
}

function destructivelyRemoveFirstDriver() {
	drivers.shift();
}

function appendDriver(name) {
	return [...drivers, name];
}	

function prependDriver(name) {
	return ['Arnold', ...drivers];
}

function removeLastDriver() {	
	return drivers.slice(0, -1);
}	

function removeFirstDriver() {
	return drivers.slice(1);
}	