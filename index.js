// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver(name) {
  drivers.push(name);
}

 function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

 function destructivelyRemoveLastDriver() {
  drivers.pop();
}

 function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

 function appendDriver(name) {
  let newArray = [...drivers, name];
  return newArray;
}

 function prependDriver(name) {
  let newArray = [name, ...drivers];
  return newArray;
}

 function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

 function removeFirstDriver() {
  return drivers.slice(1);
}
