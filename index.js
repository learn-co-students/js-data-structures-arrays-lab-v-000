// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
    drivers.push(name);
}

destructivelyAppendDriver("Ralph");

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

destructivelyPrependDriver("Bob");

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

destructivelyRemoveFirstDriver();

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

destructivelyRemoveLastDriver();

function appendDriver(name) {
    let copyofdrivers = drivers.slice();
    copyofdrivers.push(name)
    return copyofdrivers
}

appendDriver("Broom");

function prependDriver(name) {
    let copyofdrivers = drivers.slice();
    copyofdrivers.unshift(name)
    return copyofdrivers
}

prependDriver("Arnold");

function removeLastDriver() {
    let copyofdrivers = drivers.slice();
    copyofdrivers.pop(-1);
    return copyofdrivers
}

function removeFirstDriver() {
    let copyofdrivers = drivers.slice();
    copyofdrivers.shift();
    return copyofdrivers
}