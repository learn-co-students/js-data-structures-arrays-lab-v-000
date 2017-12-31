// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendDriver(name) {
    drivers.push(name); }


function destructivelyPrependDriver(name) {
      drivers.unshift(name); }

function destructivelyRemoveLastDriver() {
                  drivers.pop(); }
function destructivelyRemoveFirstDriver() {
            drivers.shift(); }

function appendDriver(name) {
  let new_array = drivers.concat(name);
  return new_array;
}


function prependDriver(name) {
  let new_array = [name];
  new_array = new_array.concat(drivers);
  return new_array;
}

function removeLastDriver() {
  return drivers.slice(0,2);
}

function removeFirstDriver() {
  return drivers.slice(1,3);
}
