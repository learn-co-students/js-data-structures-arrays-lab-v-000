// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
	drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
	drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
	drivers.pop();
}

function destructivelyRemoveFirstDriver() {
	drivers.shift();
}

function appendDriver(name) {
	 let new_array = drivers.concat(name);
  return new_array;
}

function prependDriver(name) {
  let new_array1 = [(name), ...drivers];
  return new_array1;
}

function removeLastDriver() {
  let first_two_drivers = drivers.slice(0,2);
  return first_two_drivers;
}

function removeFirstDriver() {
  let last_two_drivers = drivers.slice(1);
  return last_two_drivers;
}