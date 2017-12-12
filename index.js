// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift(name);
}

// interesting
function appendDriver (name) {
  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers]
}

//slice is NOT destructive ---> also will just return what you are not slicing off, where 2nd arg is how many
function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver () {
  return drivers.slice(1);
}
