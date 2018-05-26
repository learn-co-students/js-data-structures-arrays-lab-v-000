const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(){
  drivers.push("Ralph");
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
  let moreDrivers = drivers.slice();
  moreDrivers.push(name);
  return moreDrivers;
}

function prependDriver(name){
  let lessDrivers = drivers.slice();
  lessDrivers.unshift(name);
  return lessDrivers
}

function removeLastDriver(){
  let lessDrivers = drivers.slice();
  lessDrivers.pop();
  return lessDrivers;
}

function removeFirstDriver(){
  let lessDrivers = drivers.slice();
  lessDrivers.shift();
  return lessDrivers;
}
