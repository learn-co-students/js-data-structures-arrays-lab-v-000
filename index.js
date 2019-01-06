const drivers = ['Milo', 'Otis', 'Garfield'];
destructivelyAppendDriver = (name) => drivers.push(name);
destructivelyPrependDriver = (name) => drivers.unshift(name);
destructivelyRemoveLastDriver = () => drivers.pop();
destructivelyRemoveFirstDriver = () => drivers.shift();
appendDriver = (name) => drivers.concat(name);
prependDriver = (name) => [name, ...drivers];
removeLastDriver = () => drivers.slice(0, drivers.length-1);
removeFirstDriver = () => drivers.slice(1);
