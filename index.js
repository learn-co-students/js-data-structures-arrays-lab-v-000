// Write your solution here!
 const drivers =  ['Milo', 'Otis', 'Garfield']
 
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
  drivers.shift(name)
}

function appendDriver(name){
  const newArr = [...drivers, name];
  return newArr;
}

function prependDriver(name){
  const newArr = [name, ...drivers]
  return newArr
}

function removeLastDriver(){
  const newArr = drivers.slice(0,-1)
  return newArr
}

function removeFirstDriver(){
  const newArr = drivers.slice(1)
  return newArr
}