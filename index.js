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
  const arr2 = drivers.concat(name);
  return arr2;
}

function prependDriver(name){
  const arr2 = [name,...drivers];
  return arr2;
}

function removeLastDriver(){
  const arr4 = drivers.slice(0,drivers.length - 1)
  return arr4;
}


function removeFirstDriver(){
  const arr3 = drivers.slice(1)
  return arr3;
}
