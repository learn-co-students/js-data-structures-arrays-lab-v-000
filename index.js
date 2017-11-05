// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

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
  const addTODrivers = [...drivers, name];
  return addTODrivers
}

function prependDriver(name) {
  const AddNewDriver = [name, ...drivers];
  return AddNewDriver;
}

function removeLastDriver(name) {
  const removeLast = drivers.slice(0, drivers.length -1);
  return removeLast;
}

function removeFirstDriver(name) {
  const removeFirst = drivers.slice(1);
  return removeFirst;
}
