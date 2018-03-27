// function drivers() {
    const drivers = ["Milo", "Otis", "Garfield"]; 
// }

function destructivelyAppendDriver() {
    drivers.push("Ralph")
}

function destructivelyPrependDriver() {
    drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver () {
    return [...drivers, "Broom"]
}

function prependDriver () {
    return ["Arnold", ...drivers]
}

function removeLastDriver () {
    return drivers.slice(0,2)
}

function removeFirstDriver () {
    return drivers.slice(1)
}