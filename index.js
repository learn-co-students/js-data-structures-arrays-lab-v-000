const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  let newArr = [...drivers, name];
  return newArr;  
}

function prependDriver(name) {
  let newArr = [name, ...drivers];
  return newArr;
}

function removeLastDriver() {
  let newArr = drivers.slice(0,2);
  return newArr;
}

function removeFirstDriver() {
  let newArr = drivers.slice(-2);
  return newArr;
}