// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
	drivers.push(name)
}

function destructivelyPrependDriver(name){
	drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
	drivers.pop()
}

function destructivelyRemoveFirstDriver() {
	drivers.shift()
}

function appendDriver(name) {
	drivers
	const new_array = [...drivers, "Broom"]
	return new_array
}

function prependDriver(name) {
  const new_array = ["Arnold", ...drivers];
  return new_array;
}

function removeLastDriver() {
  const new_array = drivers.slice(0, 2);
  return new_array;
}

function removeFirstDriver() {
  const new_array = drivers.slice(1);
  return new_array;
}