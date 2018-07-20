// Write your solution here!
// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    return drivers.push(name);
}

function destructivelyPrependDriver(name){
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
    return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
    return drivers.shift(name);
}

function appendDriver(name){
   let newDrivers = [ ...drivers, name];
    return newDrivers;
}

function prependDriver(name){
     let newDrivers = [name, ...drivers];
     return newDrivers;
}

function removeLastDriver(name){
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
}

function removeFirstDriver(name) {
    let newDrivers = drivers.slice(1)
    return newDrivers;
}
//push unshift pop shift