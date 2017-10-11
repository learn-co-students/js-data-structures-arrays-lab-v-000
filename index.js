// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

destructivelyAppendDriver = (driver) => {
  drivers.push(driver);
}

destructivelyPrependDriver = (driver) => {
  drivers.unshift(driver);
}

destructivelyRemoveLastDriver = () => {
  drivers.pop();
}

destructivelyRemoveFirstDriver = () => {
  drivers.shift();
}

appendDriver = (name) => {
  return [...drivers, name];
}

prependDriver = (name) => {
  return [name, ...drivers];
}

removeFirstDriver = () => {
  return drivers.slice(1);
}

removeLastDriver = () => {
  return drivers.slice(0, drivers.length - 1);
}
