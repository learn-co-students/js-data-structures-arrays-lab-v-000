const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
drivers.pop();
}

function destructivelyRemoveFirstDriver() {
drivers.shift();
}

function appendDriver(name) {
return newDrivers = [...drivers, name];
}

function prependDriver(name) {
return newDrivers = [name, ...drivers];
}

function removeLastDriver() {
return newDrivers = drivers.slice(0,-1);
}

function removeFirstDriver() {
return newDrivers = drivers.slice(1);
}
