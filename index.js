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
  return append = [... drivers, name];
}

function prependDriver(name) {
  return prepend = [name, ...drivers];
}

function removeLastDriver() {
   return remove = drivers.slice(0, drivers.length -1);
 }

 function removeFirstDriver() {
   return remove = drivers.slice(1);
}
