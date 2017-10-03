const drivers = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendDriver = (name) => {
  drivers.push(name);
}

const destructivelyPrependDriver = (name) => {
  drivers.unshift(name);
}

const destructivelyRemoveLastDriver = (name) => {
  drivers.pop();
}

const destructivelyRemoveFirstDriver = (name) => {
  drivers.shift();
}

const appendDriver = (name) => {
  const moreDrivers = [...drivers, name];
  return moreDrivers;
}

const prependDriver = (name) => {
  const beforeDrivers = [name, ...drivers]
  return beforeDrivers;
}

const removeLastDriver = () => {
  const lastDriverGone = drivers.slice(0, drivers.length - 1);
  return lastDriverGone;
}

const removeFirstDriver = () => {
  const firstDriverGone = drivers.slice(1);
  return firstDriverGone;
}