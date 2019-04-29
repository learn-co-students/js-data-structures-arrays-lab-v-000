// Write your solution here!
//Array is []
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    return appendDriver = [...drivers, (name)];
}
   
function prependDriver(name) {
    return prependDriver = [(name), ...drivers];
}

function removeLastDriver() {
    return removeLastDriver = drivers.slice(0, length - 1);
}

function removeFirstDriver() {
    return removeFirstDriver = drivers.slice(1);
}