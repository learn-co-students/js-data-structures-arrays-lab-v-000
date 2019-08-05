// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
    return drivers
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
    return drivers
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
    return drivers;
}

function appendDriver(name) {
    const newDrivers = [...drivers, name];
    return newDrivers;
}

function prependDriver(name) {
    const newDrivers = [name, ...drivers];
    return newDrivers;
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
    return drivers.slice(1);
}