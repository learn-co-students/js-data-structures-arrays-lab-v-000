// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name)
}

function appendDriver(name){
    return [...drivers, name]
}

function prependDriver(name){
    return [name, ...drivers]
}

function removeLastDriver(name){
    return drivers.slice(0,-1)
}

function removeFirstDriver(name){
    return drivers.slice(1)
}