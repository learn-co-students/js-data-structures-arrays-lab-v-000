// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver (name) {
  drivers.splice(drivers.length, 0, name);
};
function destructivelyPrependDriver (name) {
  drivers.splice(0, 0, name);
};
function destructivelyRemoveLastDriver () {
  drivers.splice(drivers.length - 1);
};
function destructivelyRemoveFirstDriver () {
  drivers.splice(0, 1);
};
function appendDriver (name) {
  return [...drivers, name];
};
function prependDriver (name) {
  return [name, ...drivers];
};
function removeLastDriver () {
  return drivers.slice(0, 2);
};
function removeFirstDriver () {
  return drivers.slice(-2);
};
