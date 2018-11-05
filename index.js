// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
drivers.push('Ralph');

return drivers;
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');

  return drivers;
}

function destructivelyRemoveLastDriver(name){
  drivers.pop();

  return drivers;
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift();

  return drivers;
}

function appendDriver(name){
 const appendDriver = [...drivers, name];

return appendDriver;
}

function prependDriver(name){
 const appendDriver = [name, ...drivers];

return appendDriver;
}

function removeLastDriver(){
return drivers.slice(0, length - 1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}
