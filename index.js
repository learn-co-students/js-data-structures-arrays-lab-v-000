// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push('Ralph')
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let word = drivers.concat([name]);
  return word
}

function prependDriver(name) {
  let word = [name].concat(drivers);
  return word
}

function removeLastDriver() {
  let word = drivers.slice(0,-1);
  return word;
}

function removeFirstDriver() {
  let word = drivers.slice(1);
  return word;
}
