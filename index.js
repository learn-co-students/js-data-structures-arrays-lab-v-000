// Write your solution here!

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
  const new_drivers_array = [...drivers, name];
  return new_drivers_array;
}

function prependDriver(name) {
  const new_drivers_array = [name, ...drivers];
  return new_drivers_array;
}

function removeLastDriver(name) {
  const new_drivers_array = drivers.slice(0, drivers.length - 1);
  return new_drivers_array;
}

function removeFirstDriver(name) {
  const new_drivers_array = drivers.slice(1);
  return new_drivers_array;
}
