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
  const newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  const moreDrivers = [name, ...drivers];
  return moreDrivers;
}

function removeLastDriver() {
  const byeLastDriver = drivers.slice(0, drivers.length - 1);
  return byeLastDriver;
}

function removeFirstDriver() {
  const byeFirstDriver = drivers.slice(1);
  return byeFirstDriver;
}
