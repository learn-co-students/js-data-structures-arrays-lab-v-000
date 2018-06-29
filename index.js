// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver){
    drivers.push(driver);
}
    
function destructivelyPrependDriver(driver) {
    drivers.unshift(driver)
}

function destructivelyRemoveLastDriver(driver) {
    drivers.pop(driver)
}

function destructivelyRemoveFirstDriver(driver) {
    drivers.shift(driver);
}

function appendDriver(name) {
    newArray = [...drivers, name];
    return newArray;
}

function prependDriver(name) {
    newArray = [name, ...drivers];
    return newArray;
}

function removeLastDriver() {
    newArray = drivers.slice(0, -1);
    return newArray;
}

function removeFirstDriver() {
    newArray = drivers.slice(1);
    return newArray;
}