// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver){
    drivers.push(driver);
}

function destructivelyPrependDriver(driver){
    drivers.unshift(driver);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(driver){
    const addDriver = [...drivers, driver];
    return addDriver;
}

function prependDriver(driver){
    const addDriver = [driver, ...drivers];
    return addDriver;
}

function removeLastDriver(driver){
    const removeDriver = drivers.slice(0, drivers.length - 1);
    return removeDriver;
}

function removeFirstDriver(driver){
    const removeDriver = drivers.slice(1);
    return removeDriver;
}