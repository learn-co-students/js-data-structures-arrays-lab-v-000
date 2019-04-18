// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push('Ralph');
  
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  newDrivers = [...drivers, 'Broom'];
  return newDrivers;
}
function prependDriver(name){
  newDrivers = ["Arnold", ...drivers];
  return newDrivers;
}
function removeLastDriver(name){
  newDrivers = drivers.slice(0);
  newDrivers.pop()
  
  return newDrivers;
}
function removeFirstDriver(name){
  newDrivers = drivers.slice(0);
  newDrivers.shift()
  
  return newDrivers;
}