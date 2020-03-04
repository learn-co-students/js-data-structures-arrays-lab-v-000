const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  const newerDrivers = [name, ...drivers];
  return newerDrivers;
}

function removeLastDriver() {
  const fewerDrivers = drivers.slice(0, 2);
  return fewerDrivers;
}

function removeFirstDriver() {
  const oneLessDriver = drivers.slice(1);
  return oneLessDriver;
}
