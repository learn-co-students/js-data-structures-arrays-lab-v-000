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
  let newDrivers = drivers.slice();
  newDrivers.push(name);
  return newDrivers
}

function prependDriver(name) {
  let otherDrivers = drivers.slice();
  otherDrivers.unshift(name);
  return otherDrivers;
}

function removeLastDriver() {
  let editedCats = drivers.slice();
  editedCats.pop();
  return editedCats;
}


function removeFirstDriver() {
  let lastCats = drivers.slice();
  lastCats.shift();
  return lastCats
}
