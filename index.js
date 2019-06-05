const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  console.log(drivers);
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  console.log(drivers);
};

function destructivelyRemoveLastDriver() {
  drivers.pop();
  console.log(drivers);
};

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  console.log(drivers);
};

function appendDriver(name) {
  const allDrivers = [...drivers, name];
  return allDrivers;
};

function prependDriver(name) {
  const allDrivers = [name, ...drivers];
  return allDrivers;
};

function removeLastDriver() {
  const allDrivers = drivers.slice(0, drivers.length - 1);
  return allDrivers;
};

function removeFirstDriver() {
  const allDrivers = drivers.slice(1);
  return allDrivers;
};
