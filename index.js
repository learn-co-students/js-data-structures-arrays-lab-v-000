// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name){
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift();
}

function appendDriver(name) {
    const newDrivers = [...drivers, name];
    return newDrivers;
}

function prependDriver(name) {
    const prependDriver = [name, ...drivers];
    return prependDriver;
}

function removeLastDriver() {
    const removeLast = drivers.slice(0, drivers.length - 1);
    return removeLast;
}

function removeFirstDriver() {
    const removeFirst = drivers.slice(1);
    return removeFirst;
}