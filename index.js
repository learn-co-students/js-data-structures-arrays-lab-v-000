// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let array = drivers.slice();
  array.push(name);
  return array
}

function prependDriver(name) {
  let array = drivers.slice();
  array.unshift(name);
  return array
}

function removeLastDriver() {
  let array = drivers.slice();
  array.pop();
  return array
}

function removeFirstDriver() {
  let array = drivers.slice();
  array.shift();
  return array
<<<<<<< HEAD
}
=======
}
>>>>>>> b678588c7cf1b071b6019007aa9c61dd539430cd
