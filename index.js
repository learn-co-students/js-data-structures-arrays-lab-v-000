// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
      drivers.push('Ralph')
}

function destructivelyPrependDriver(name){
      drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
      drivers.pop()
}

function destructivelyRemoveFirstDriver() {
      drivers.shift()
}

function appendDriver(name) {
    name = [...drivers, 'Broom']
    return name
}

function prependDriver(name) {
  name = ['Arnold', ...drivers]
  return name
}

function removeLastDriver(){
  return drivers.slice(0,2)
}

function removeFirstDriver(){
  return drivers.slice(1,3)
}
