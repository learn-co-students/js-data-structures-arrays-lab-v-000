// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
	drivers.push(name)
}

function destructivelyPrependDriver(name){
	drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
	drivers.pop()
}

function destructivelyRemoveFirstDriver(){
	drivers.shift()
}

function appendDriver(name){
	let new_drivers = drivers.slice()
	new_drivers.push(name)
	return new_drivers
}

function prependDriver(name){
	let new_drivers = drivers.slice()
	new_drivers.unshift(name)
	return new_drivers
}

function removeLastDriver(){
	let new_drivers = drivers.slice()
	new_drivers.pop()
	return new_drivers
}

function removeFirstDriver(){
	let new_drivers = drivers.slice()
	new_drivers.shift()
	return new_drivers
}




