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
  const new_drivers = [...drivers,name];
  // debugger;
  return new_drivers;
}


function prependDriver(name){
  const new_drivers = [name];
  for(var i =0; i< drivers.length; i++){
    new_drivers.push(drivers[i])
  }
  return new_drivers
}

function removeLastDriver(){
    const new_drivers = [...drivers];
    new_drivers.pop();
    return new_drivers;
}

function removeFirstDriver(){
  const new_drivers = [...drivers];
  new_drivers.shift();
  return new_drivers
}
