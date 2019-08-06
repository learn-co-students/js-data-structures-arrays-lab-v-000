// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
	// body...
	drivers.push(name)
}

function destructivelyPrependDriver(name) {
	// body...
	drivers.unshift(name)
}
function destructivelyRemoveLastDriver() {
	// body...
	drivers.pop(-1)
}
function destructivelyRemoveFirstDriver() {
	// body...
	drivers.shift(1)
}
function appendDriver(name){
	// body...
	 return [...drivers, name]	
}
function prependDriver(name) {
	// body...
return [name,...drivers]
}
function removeLastDriver() {
	// body...
	return drivers.slice(0,drivers.length-1)
}
function removeFirstDriver(){
	// body...
	return drivers.slice(1)
}