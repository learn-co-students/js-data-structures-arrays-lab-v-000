const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  var newArray = drivers.slice();
  newArray.push(name);
  return newArray;
}
function prependDriver(name){
  var newArray = drivers.slice();
  newArray.unshift(name);
  return newArray;
}
function removeLastDriver(){
  var newArray = drivers.slice(0,-1);
  return newArray;
}
function removeFirstDriver(){
  var newArray = drivers.slice(1);
  return newArray;
}
