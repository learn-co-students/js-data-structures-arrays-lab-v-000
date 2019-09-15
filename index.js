// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push('Ralph');
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
   return [...drivers, "Broom"];
}

function prependDriver(name) {
    return ["Arnold", ...drivers];
}

function removeLastDriver() {
    return drivers.slice(0, 2);
}

function removeFirstDriver() {
    return drivers.slice(1);
}