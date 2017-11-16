const drivers = [`Milo`, 'Otis', 'Garfield']

let destructivelyAppendDriver = (name) => {
  return drivers.push(name);
}

let destructivelyPrependDriver = (name) => {
  return drivers.unshift(name);
}

let destructivelyRemoveLastDriver = (name) => {
  return drivers.pop(name);
}

let destructivelyRemoveFirstDriver = (name) => {
  return drivers.shift(name)
}

let appendDriver = (name) => {
  let newDrivers = [...drivers, name]

  return newDrivers;
}

let prependDriver = (name) => {
  let newDrivers = [name,...drivers]

  return newDrivers;
}

let removeLastDriver = () => {
  return drivers.slice(0, drivers.length-1)
}

let removeFirstDriver = () => {
  return drivers.slice(1, drivers.length)
}
