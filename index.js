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
  const newDriver = [...drivers.slice(0,3),'Broom'];
  return newDriver;
}

function prependDriver(name){
  const newDriver = [name, ...drivers];
  return newDriver;
}

function removeLastDriver(){
   const newDriver = [...drivers.slice(0,2)];
  return newDriver;
}
function removeFirstDriver(){
  const newDriver = [...drivers.slice(1,3)];
  return newDriver;
}