// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
	drivers.push(name)
}

function destructivelyPrependDriver(name) {
	drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
	drivers.pop(name)
}

function destructivelyRemoveFirstDriver() {
	drivers.shift(name)
}

function appendDriver(name) {
	const copy = [...drivers.slice(), name]
	return copy
}

function prependDriver(name) {
	const copy = [name, ...drivers.slice()]
	return copy
}

function removeLastDriver() {
	return drivers.slice(0, 2)
}

function removeFirstDriver() {
	return drivers.slice(1)
}