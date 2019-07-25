// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
    drivers.shift(name);
}

function appendDriver(name) {
    const appDrivers = drivers.slice(); 
    appDrivers.push(name); 
    return appDrivers;
}

function prependDriver(name) {
    const preDrivers = drivers.slice(); 
    preDrivers.unshift(name); 
    return preDrivers;
}

function removeLastDriver() {
    const appDrivers = drivers.slice(0, -1); 
 
    return appDrivers;
}

function removeFirstDriver() {
    const appDrivers = drivers.slice(1); 
    return appDrivers;
}