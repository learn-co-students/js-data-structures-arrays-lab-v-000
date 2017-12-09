const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const appendArray = [...drivers, `${name}`];
  return appendArray;
}

function prependDriver(name) {
  const prependArray = [`${name}`, ...drivers];
  return prependArray;
}

function removeLastDriver() {
  const removeLastDriver = drivers.slice(0, -1);
  return removeLastDriver;
}

function removeFirstDriver() {
  const removeFirstDriver = drivers.slice(1);
  return removeFirstDriver;
}