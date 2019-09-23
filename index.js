// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name) {
  let arr = drivers.slice(0);
  arr.push(name)
  return arr;
}

function prependDriver(name) {
  let arr = drivers.slice(0);
  arr.unshift(name)
  return arr;
}

function removeLastDriver() {
  let arr = drivers.slice(0);
  arr.pop()
  return arr;
}

function removeFirstDriver() {
  let arr = drivers.slice(0);
  arr.shift()
  return arr;
}
