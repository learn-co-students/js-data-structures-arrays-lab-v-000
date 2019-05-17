// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
    return drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
    return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift()
}

function appendDriver(name) {
    const newArray = [...drivers,name]
    return newArray
}

function prependDriver(name) {
    const newArray = [name,...drivers]
    return newArray
}

function removeLastDriver() {
    const newArray = drivers.slice(0, drivers.length - 1)
    return newArray
}


function removeFirstDriver() {
    const newArray = drivers.slice(1)
    return newArray
}