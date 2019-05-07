// Write your solution here!
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

function appendDriver(name) {
    let allDrivers = [...drivers, name];
    return allDrivers
}

function prependDriver(name) {
    let allDrivers = [name, ...drivers];
    return allDrivers
}

function removeLastDriver() {
    let allDrivers = drivers.slice(0, drivers.length - 1);
    return allDrivers
}

function removeFirstDriver() {
    let allDrivers = drivers.slice(1);
    return allDrivers
}