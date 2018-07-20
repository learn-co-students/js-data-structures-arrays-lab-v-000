// Write your solution here!
// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
    drivers.push(name);
  }
  
  function destructivelyPrependDriver (name) {
    drivers.unshift(name);
  }
  
  function destructivelyRemoveLastDriver () {
    drivers.pop();
  }
  
  function destructivelyRemoveFirstDriver () {
    drivers.shift();
  }
  
  function appendDriver (name) {
    return [...drivers, name];
  }
  
  function prependDriver (name) {
    return [name, ...drivers];
  }
  
  function removeFirstDriver () {
    return drivers.slice(1);
  }
  
  function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }
//push unshift pop shift
// remember we dont need any arguments for removal methods like shift and pop.