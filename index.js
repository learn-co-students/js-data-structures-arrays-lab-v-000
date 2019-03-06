
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newdrivers = [...drivers, name];
  return newdrivers;
}

function prependDriver(name) {
  const a = [name, ...drivers];
  return a;
}

function removeLastDriver() {
  b =   drivers.slice(0, drivers.length-1);
  return b;
}

function removeFirstDriver() {
  const c = drivers.slice(1);
  return c;
}
