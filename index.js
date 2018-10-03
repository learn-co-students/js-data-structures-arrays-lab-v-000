const drivers = ["Milo", "Otis", "Garfield"];
drivers;

function destructivelyAppendDriver()
{
  drivers.push("Ralph");
}

function destructivelyPrependDriver()
{
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver()
{
  drivers.pop("Ralph");
}

function destructivelyRemoveFirstDriver()
{
  drivers.shift("Bob");
}

function appendDriver(name){
return [...drivers, name];
}


function prependDriver(name)
{
return [name, ...drivers];
}

function removeLastDriver(){
return drivers.slice(0, drivers.length -1);
}


function removeFirstDriver()
{return drivers.slice(1);
}
