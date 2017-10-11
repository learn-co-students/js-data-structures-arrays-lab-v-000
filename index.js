const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (name) => {drivers.push(name);}
const destructivelyPrependDriver = (name) => {drivers.unshift(name);}
const destructivelyRemoveLastDriver = () => {drivers.pop();}
const destructivelyRemoveFirstDriver = () => {drivers.shift();}

const appendDriver = (name) => {return [...drivers, name];}
const prependDriver = (name) => {return [name, ...drivers];}
const removeLastDriver = () => {return drivers.slice(0, -1);}
const removeFirstDriver = () => {return drivers.slice(1);}
