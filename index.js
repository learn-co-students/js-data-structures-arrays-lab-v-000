const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
};

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
};

function appendDriver(name) {
  driversNew = [...drivers, name];
  return driversNew;
};

function prependDriver(name) {
  driversNew = [name, ...drivers];
  return driversNew;
};

function removeLastDriver() {
  driversNew = drivers.slice(0, drivers.length -1);
  return driversNew;
};

function removeFirstDriver() {
  driversNew = drivers.slice(1);
  console.log(driversNew)
  return driversNew;
};
