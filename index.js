// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"];



 function destructivelyAppendDriver(driverName){
      drivers.push(driverName);
 }

function destructivelyPrependDriver(driverName){
    drivers.unshift(driverName);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}
function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    const addedDriver = [ ...drivers, name];
    return addedDriver;
}

function prependDriver(name){
    const add = [name, ...drivers];
    return add;
}

function removeLastDriver(){
    return drivers.slice(0, drivers.length -1);
}

function removeFirstDriver() {
    return drivers.slice(1, drivers.length);
}
