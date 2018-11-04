const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    newDrivers = drivers.push(name);
    return newDrivers;
}

function destructivelyPrependDriver(name) {
    newDrivers = drivers.unshift(name);
    return newDrivers;
}

function destructivelyRemoveLastDriver() {
    newDrivers = drivers.pop();
    return newDrivers;
}

function destructivelyRemoveFirstDriver() {
    newDrivers = drivers.shift();
    return newDrivers;
}

function appendDriver(name) {
    newDrivers = [...drivers, name];
    return newDrivers;
}

function prependDriver(name) {
    newDrivers = [name, ...drivers];
    return newDrivers;
}

function removeLastDriver() {
    newDrivers = drivers.slice(0, drivers.length - 1);
    return newDrivers;
}

function removeFirstDriver() {
    newDrivers = drivers.slice(1);
    return newDrivers;
}
