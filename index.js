// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(driver) {
  return drivers.push(driver);
}

function destructivelyPrependDriver(driver){
  return drivers.unshift(driver);
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function appendDriver(driver) {
  const new_array = [...drivers, driver];
  return new_array
}

function prependDriver(driver) {
  const new_array = [driver, ...drivers];
  return new_array
}

function removeLastDriver() {
  const new_array = drivers.slice(0, drivers.length -1)
  return new_array
}

function removeFirstDriver() {
  const new_array = drivers.slice(1);
  return new_array
}
