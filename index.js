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
  const results = [...drivers, name];
  return results;
}

function prependDriver (name) {
  const results = [name, ...drivers];
  return results;
}

function removeLastDriver () {
  const results = drivers.slice(0, drivers.length -1);
  return results;
}

function removeFirstDriver () {
  const results = drivers.slice(1, drivers.length);
  return results;
}
