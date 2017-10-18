// Write your solution here!

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
 allDrivers = [...drivers, name];
 return allDrivers
}

function prependDriver(name) {
 allDrivers = [name, ...drivers];
 return allDrivers
}

function removeLastDriver() {
 updatedDrivers = drivers.slice(0, 2)
 return updatedDrivers
}

function removeFirstDriver() {
 updatedDrivers = drivers.slice(1)
 return updatedDrivers
}
