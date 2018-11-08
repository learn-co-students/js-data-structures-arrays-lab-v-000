// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push(name)
}
function destructivelyPrependDriver(name) {
    return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    let allDrivers = [...drivers, name]
    return allDrivers
}

function prependDriver(name) {
    let allDrivers = [name, ...drivers]
    return allDrivers
}

function removeLastDriver() {
    let allDrivers = [...drivers]
    allDrivers.pop()
    return allDrivers
}

function removeFirstDriver() {
    let allDrivers = [...drivers]
    allDrivers.shift()
    return allDrivers
    
}
