// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
};

function destructivelyPrependDriver(name){
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver(){
  drivers.pop();
};

function destructivelyRemoveFirstDriver(){
  drivers.shift();
};

function appendDriver(name){
  const newDriver = drivers.slice()
  newDriver.push(name)
  return newDriver
};

function prependDriver(name){
  const newDriver = drivers.slice()
  newDriver.unshift(name)
  return newDriver
};

function removeLastDriver(name){
  const newDriver = drivers.slice()
  newDriver.pop(name)
  return newDriver
};

function removeFirstDriver(name){
  const newDriver = drivers.slice()
  newDriver.shift(name)
  return newDriver
};
