

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  const add_driver = [...drivers, name];
  return add_driver
}

function prependDriver(name) {
  const add_driver = [name, ...drivers];
  return add_driver
}

function removeLastDriver(name) {
  const last_removed = drivers.slice(0,2)
  return last_removed
}

function removeFirstDriver(name) {
  const first_removed = drivers.slice(1)
  return first_removed
}