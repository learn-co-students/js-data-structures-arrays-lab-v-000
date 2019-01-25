// Write your solution here
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
drivers.push(name);
};

function destructivelyPrependDriver(name){
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
};

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
};

function appendDriver(name){
  const newArray = [...drivers, name];
  return newArray;
};

function prependDriver(name){
  const anotherArray = [name, ...drivers];
  return anotherArray;
};

function removeLastDriver(){
   const newSliceArray = drivers.slice(0, drivers.length-1);
   return newSliceArray;
};

function removeFirstDriver(){
  const newFirstSliceArray = drivers.slice(1);
  return newFirstSliceArray;
};
