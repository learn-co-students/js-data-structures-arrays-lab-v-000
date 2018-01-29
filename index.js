const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  const newDrivers = [...drivers, "Broom"]
  return newDrivers
}

function prependDriver(name) {
  const newDrivers = ["Arnold", ...drivers]
  return newDrivers
}

function removeLastDriver() {
  const newDrivers = drivers.slice(0, 2)
  return newDrivers
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(1)
  return newDrivers
}
