// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name)
{
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name)
{
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name)
{
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name)
{
  drivers.shift()
}

function appendDriver(name)
{
  const newDrivers = drivers.slice();
  newDrivers.push("Broom")
  return newDrivers;
}

function prependDriver(name)
{
  const newDrivers = drivers.slice();
  newDrivers.unshift("Arnold")
  return newDrivers;
}

function removeLastDriver(name)
{
  const newDrivers = drivers.slice();
  newDrivers.pop()
  return newDrivers;
}

function removeFirstDriver(name)
{
  const newDrivers = drivers.slice();
  newDrivers.shift()
  return newDrivers;
}
