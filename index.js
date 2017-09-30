const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    let newArr = [...drivers, name]
    return newArr
}

function prependDriver(name) {
    let newArr = [name, ...drivers]
    return newArr
}

function removeLastDriver() {
    let newArr = drivers.slice(0, drivers.length-1)
    return newArr
}

function removeFirstDriver() {
    let newArr = drivers.slice(1)
    return newArr
}
