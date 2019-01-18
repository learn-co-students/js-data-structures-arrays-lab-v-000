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
 const newarray = [...drivers, name];
  return newarray;
}

function prependDriver(name){
 const newarray = [name , ...drivers];
  return newarray;
}

function removeLastDriver(){
  const newarray = drivers.slice(0,drivers.length-1);
  return newarray;
}

function removeFirstDriver(){
  const newarray = drivers.slice(1,drivers.length);
  return newarray;
}
