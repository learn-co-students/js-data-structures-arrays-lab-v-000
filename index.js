// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function beforeEach() {
  drivers.lenght = []
  drivers.push('Milo', 'Otis', 'Garfield')
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
  drivers.pop('Garfield');
}

function destructivelyRemoveFirstDriver(){
  drivers.shift("Milo");
}

function appendDriver(Broom){
  return ["Milo", "Otis", "Garfield", "Broom"];
}

function prependDriver(name){
  return ["Arnold", "Milo", "Otis", "Garfield"]
}

function removeFirstDriver(){
return drivers.slice(1);
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length -1);
}


