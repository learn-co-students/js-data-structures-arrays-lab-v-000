// Write your solution here!


const drivers =  ["Milo", "Otis", "Garfield"];
// const newDrivers = drivers.slice();

function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function appendDriver(name){
  let newDrivers = drivers.slice();
  newDrivers.push(name);
  return newDrivers;
}

function prependDriver(name){
  let newDrivers = drivers.slice();
  newDrivers.unshift(name);
  return newDrivers;
}

function removeLastDriver(){
  let newDrivers = drivers.slice();
  newDrivers.pop();
  return newDrivers;
}

function removeFirstDriver(){
  let newDrivers = drivers.slice();
  newDrivers.shift();
  return newDrivers;
}


  