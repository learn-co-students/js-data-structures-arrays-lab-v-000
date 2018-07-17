// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    return drivers.push(name);
}

function destructivelyPrependDriver(name){
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift();
}

function appendDriver(name){
    const new_drivers = [...drivers, name];
    return new_drivers;
}

function prependDriver(name){
    const new_drivers = [name, ...drivers];
    return new_drivers;
}

function removeLastDriver(){
    const new_drivers = drivers.slice(0, drivers.length-1);
    return new_drivers;
}

function removeFirstDriver(){
    const new_drivers = drivers.slice(1);
    return new_drivers;
}