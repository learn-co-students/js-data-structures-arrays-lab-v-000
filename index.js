const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop("Otis");
}

function destructivelyRemoveFirstDriver() {
  drivers.shift("Milo");
}

function appendDriver(newDriver) {
  return [...drivers, newDriver]
}

function prependDriver(newDriver) {
  return [newDriver, ...drivers]
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
