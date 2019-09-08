const drivers = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver(name) {
   drivers.push(name)
 }

 function destructivelyPrependDriver(name) {
   drivers.unshift(name)
 }

 function destructivelyRemoveLastDriver() {
   drivers.pop()
 }

 function destructivelyRemoveFirstDriver() {
   drivers.shift()
 }

 function appendDriver(name) {
   newArray = [...drivers, name]
   return newArray
 }

 function prependDriver(name) {
   newArray = [name, ...drivers]
   return newArray
 }

 function removeLastDriver(name) {
   return drivers.slice(0, -1)
 }

 function removeFirstDriver(name) {
   return drivers.slice(1)
 }
