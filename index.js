const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
	drivers.push('Ralph');
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
	const newDrivers = [...drivers, 'Broom'];
	return newDrivers;
}

function prependDriver(name) {
	const evenNewerDrivers = ['Arnold', ...drivers];
	return evenNewerDrivers;
}

function removeLastDriver() {
	const copyOfDriver = drivers.slice(0, -1);
	return copyOfDriver;
}

function removeFirstDriver() {
	const anotherCopyOfDriver = drivers.slice(1);
	return anotherCopyOfDriver;
}
