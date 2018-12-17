

  const drivers = ['Milo', 'Otis', 'Garfield']

  function destructivelyAppendDriver(d){
    drivers.push(d)
  }

  function destructivelyPrependDriver(d){
    drivers.unshift(d)
  }

  function destructivelyRemoveLastDriver(){
    drivers.pop()
  }

  function destructivelyRemoveFirstDriver(){
    drivers.shift()
  }

  function appendDriver(name){
    newDrivers = [...drivers.slice(0),name]
    return newDrivers
  }

  function prependDriver(name){
    newDrivers = [name,...drivers.slice(0)]
    return newDrivers
  }

  function removeLastDriver(){
    newDrivers = drivers.slice(0, drivers.length - 1)
    return newDrivers
  }

  function removeFirstDriver(){
    newDrivers = drivers.slice(1)
    return newDrivers
  }
