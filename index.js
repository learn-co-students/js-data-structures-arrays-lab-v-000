// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(name){
  arr = [...drivers, name];
  return arr;
}

function prependDriver(name){
  arr = [name, ...drivers];
  return arr;
}

function removeLastDriver(){
  arr = drivers.slice(0,-1);
  return arr;
}

function removeFirstDriver(){
  arr = drivers.slice(1);
  return arr;
}
