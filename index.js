const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver () {
  drivers.push ("Ralph")
}

function destructivelyPrependDriver () {
  drivers.unshift ("Bob")
}

function destructivelyRemoveLastDriver () {
  drivers.pop ()
}

function destructivelyRemoveFirstDriver () {
  drivers.shift()
}

function appendDriver (name) {
  const appendDriver = [...drivers, name];
  return appendDriver
}

function prependDriver (name) {
  const prependDriver = [name, ...drivers]
  return prependDriver
}

function removeLastDriver () {
  return drivers.slice(0, (drivers.length -1))
}

function removeFirstDriver () {
  return drivers.slice(1, (drivers.length))
}
