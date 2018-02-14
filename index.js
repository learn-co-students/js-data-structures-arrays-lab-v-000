// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  // return drivers;
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  // return drivers;
};

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
};

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
};

//cleaner
function appendDriver (name) {
  return [...drivers, name];
};

// function appendDriver(name) {
//   const newDrivers = [...drivers];
//   newDrivers.push(name);
//   return newDrivers
// };

function prependDriver(name) {
  return [name, ...drivers];
};

//slice is NOT destructive ---> also will just return what you are not slicing off, where 2nd arg is how many
function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver () {
  // return drivers.slice(1, drivers.length);
  return drivers.slice(1)
}
