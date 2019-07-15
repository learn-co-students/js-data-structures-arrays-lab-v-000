const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(){
  drivers.push("Ralph");
};

function destructivelyPrependDriver(){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newDrivers = [...drivers, name];
  return newDrivers;
}
function prependDriver(name){
  let newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver(){
  let removedDriver = drivers.slice(0, drivers.length - 1);
  return removedDriver;
}

function removeFirstDriver(){
  let removedDriver = drivers.slice(1);
  return removedDriver;
}
