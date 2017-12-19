// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift(name)
}

function appendDriver(name) {
  new_array = drivers.slice();
  new_array.push(name);
  return new_array;
}

function prependDriver(name) {
  new_array = drivers.slice();
  new_array.unshift(name);
  return new_array;
}

function removeLastDriver(name) {
  new_array = drivers.slice();
  new_array.pop(name);
  return new_array;
}

function removeFirstDriver(name) {
  new_array = drivers.slice();
  new_array.shift(name);
  return new_array;
}
