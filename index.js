// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function appendDriver(name) {
  const newDriver = [...drivers, name];
  return newDriver;
}

function prependDriver(name) {
  const newDriver = [name,...drivers];
  return newDriver;
}

function removeLastDriver(name) {
  const newDriver = drivers.slice(0, 2);
  return newDriver;
}

function removeFirstDriver() {
  const newDriver = drivers.slice(1);
  return newDriver;
}
