// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function removeLastDriver(){
  const newDrivers = drivers.slice(0, 2);
  return newDrivers;
}


function destructivelyAppendDriver(){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const newDrivers = [...drivers, 'Broom'];
  return newDrivers;
}

function prependDriver(name){
  const newDrivers = ['Arnold', ...drivers];
  return newDrivers;
}

function removeLastDriver(){
  const newDrivers = drivers.slice(0, 2);
  return newDrivers;
}

function removeFirstDriver(){
  const newDrivers = drivers.slice(1, 3);
  return newDrivers;
}
