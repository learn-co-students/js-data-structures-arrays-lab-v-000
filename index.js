// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const updatedDriverArray = [...drivers, name];
  return updatedDriverArray;
}

function prependDriver(name){
  const updatedDriverArray = [name, ...drivers];
  return updatedDriverArray;
}

function removeLastDriver(){
  return drivers.slice(0, -1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}
