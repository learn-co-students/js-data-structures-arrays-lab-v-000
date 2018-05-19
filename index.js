const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
 drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  var newDriver = [...drivers,"Broom"]
  return newDriver;
}

function prependDriver(name){
  var newDriver = ["Arnold",...drivers]
  return newDriver;
}

function removeLastDriver(name){
  var newDriver = drivers;
  return newDriver.slice(0, newDriver.length - 1);
}

function removeFirstDriver(name){
  var NewDriver = drivers
  return NewDriver.slice(1);
}
