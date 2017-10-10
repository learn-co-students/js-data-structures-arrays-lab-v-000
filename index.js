// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver)
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift()
}

function appendDriver(driver) {
  const allDrivers = [...drivers, driver]
  return allDrivers
}

function prependDriver(driver) {
  const allDrivers = [driver, ...drivers]
  return allDrivers
}

function removeLastDriver(driver) {
  const newDrivers = drivers.slice(0, drivers.length -1)
  return newDrivers
}

function removeFirstDriver(driver) {
  const newDrivers = drivers.slice(1)
  return newDrivers
}
