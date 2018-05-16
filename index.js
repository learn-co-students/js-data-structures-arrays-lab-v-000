const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
  drivers.pop();
};

function destructivelyRemoveFirstDriver() {
  drivers.shift();
};

function appendDriver(name) {
  return newDrivers = [...drivers, name];
};

function prependDriver(name) {
  return newDrivers = [name, ...drivers];
};

function removeLastDriver() {
  return newDrivers = drivers.slice(0,2);
};

function removeFirstDriver(){
  return newDrivers = drivers.slice(1,3);
};
