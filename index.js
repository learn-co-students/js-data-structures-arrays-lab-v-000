// Write your solution here!


  const drivers = ["Milo", "Otis", "Garfield"];


  function destructivelyAppendDriver(name){
    return drivers.push(name);
  }

  function destructivelyPrependDriver(name){
    return drivers.unshift(name);
  }

  function destructivelyRemoveLastDriver(){
    return drivers.pop();
  }

  function destructivelyRemoveFirstDriver(){
    return drivers.shift();
  }

  function appendDriver(name){
    newDrivers = [...drivers, name];
    return newDrivers;
  }

  function prependDriver(name){
   newDrivers = [ name, ...drivers.slice(0)];
   return newDrivers;
  }

  function removeLastDriver(){
    newDrivers = [...drivers.slice(0,-1)];
    return newDrivers;
  }

  function removeFirstDriver(){
    newDrivers = [...drivers.slice(1,drivers.length)];
    return newDrivers;
  }
