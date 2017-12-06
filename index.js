const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver(name) {
  const newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver () {
  return drivers.slice(0, 2);
}

function removeFirstDriver () {
  return drivers.slice(1);
}
