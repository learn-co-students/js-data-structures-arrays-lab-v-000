// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}


function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}


function appendDriver(name){
  var copyDrivers = drivers.slice();
  copyDrivers.push(name);
  return copyDrivers;
}

function prependDriver(name){
  var copyDrivers = drivers.slice();
  copyDrivers.unshift(name);
  return copyDrivers;
}

function removeLastDriver(name){
  var copyDrivers = drivers.slice();
  copyDrivers.pop(name);
  return copyDrivers;}

function removeFirstDriver(name){
  var copyDrivers = drivers.slice();
  copyDrivers.shift(name);
  return copyDrivers;}
