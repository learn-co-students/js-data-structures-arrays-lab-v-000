// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
};

function destructivelyRemoveLastDriver() {
  drivers.pop()
  return drivers
};

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  return drivers
};

function appendDriver(name) {
  let newArray;
  newArray = [...drivers, name]
  return newArray;
};

function prependDriver(name) {
  let newArray;
  newArray = [name, ...drivers]
  return newArray;
};

function removeLastDriver() {
  let newArray;
  newArray = drivers.slice(0, drivers.length - 1)
  return newArray;
};

function removeFirstDriver() {
  let newArray;
  newArray = drivers.slice(1)
  return newArray;
};
