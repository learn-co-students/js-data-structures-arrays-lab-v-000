// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
    return drivers.push(name)
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift()
}

function appendDriver(name) {
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver() {
    return drivers.slice(0, -1)
}

function removeFirstDriver() {
    return drivers.slice(1)
}
