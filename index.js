// Write your solution here!

// destructive methods
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver() {
  drivers.push('Ralph');
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.splice(0, 1);
}

// non-destructive methods
function appendDriver() {
  return [...drivers, 'Broom'];
}

function prependDriver() {
  return ['Arnold', ...drivers];
}

function removeLastDriver() {
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
