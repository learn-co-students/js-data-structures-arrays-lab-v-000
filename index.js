const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  const addToDrivers = [...drivers, name];
  return addToDrivers;
}

function prependDriver(name) {
  const addNewDriver = [name, ...drivers];
  return addNewDriver;
}

function removeLastDriver(name) {
  const removeLast = drivers.slice(0, drivers.length - 1);
  return removeLast;
}

function removeFirstDriver(name) {
  const removeFirst = drivers.slice(1)
  return removeFirst;
}
