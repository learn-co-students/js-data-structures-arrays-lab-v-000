const drivers = ['Milo', 'Otis', 'Garfield'];
destructivelyAppendDriver = () => drivers.push('Ralph');
destructivelyPrependDriver = () => drivers.unshift('Bob');
destructivelyRemoveLastDriver = () => drivers.pop();
destructivelyRemoveFirstDriver = () => drivers.shift();
appendDriver = () => drivers.concat('Broom');
prependDriver = () => ['Arnold', ...drivers];
removeLastDriver = () => drivers.slice(0, drivers.length-1);
removeFirstDriver = () => drivers.slice(1, drivers.length);
