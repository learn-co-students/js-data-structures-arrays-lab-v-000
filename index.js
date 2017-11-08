// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

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
  const newdrivers = [...drivers, name];
  return newdrivers;
}

function prependDriver(name){
  const newd = [name, ...drivers];
  return newd;
}

function removeLastDriver(){
  const removed = drivers.slice(0,2);
  return removed;
}

function removeFirstDriver(){
  const remove = drivers.slice(1,3);
  return remove;
}
