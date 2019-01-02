// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
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
    let new_drivers = [...drivers, name];
    return new_drivers;
}

function prependDriver(name) {
    let new_drivers = [name, ...drivers];
    return new_drivers; 
}

function removeLastDriver() {
   return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver() {
    return drivers.slice(1);
}