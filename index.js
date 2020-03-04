// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  const appendedArray = [...drivers, name];
  return appendedArray;
}

function prependDriver(name) {
  const prependedArray = [name, ...drivers];
  return prependedArray;
}

function removeLastDriver() {
  const reducedArray = drivers.slice(0, 2);
  return reducedArray;
}

function removeFirstDriver() {
  const reducedArray = drivers.slice(1);
  return reducedArray;
}
