const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name) {
  let ad = [...drivers, name];
  return ad
}

function prependDriver(name) {
  let pd = [name, ...drivers];
  return pd
}

function removeLastDriver() {
  let rld = drivers.slice(0, -1)
  return rld;
}

function removeFirstDriver() {
  let rfd = drivers.slice(1);
  return rfd;
}
