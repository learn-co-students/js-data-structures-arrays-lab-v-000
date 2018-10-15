// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendDriver(name) {
      drivers.push(name);
      return drivers;
}
function destructivelyPrependDriver(name) {
      drivers.unshift(name);
      drivers;
}

  function destructivelyRemoveLastDriver() {
      drivers.pop(name);
      drivers;
      }
    
    function destructivelyRemoveFirstDriver() {
      drivers.shift(name);
      drivers;
    }
    
     function appendDriver(name) {
    
       const copyOfDrivers = drivers.slice();
       copyOfDrivers.push(name);
       return copyOfDrivers;
     }
     

      function prependDriver(name) {
      const copyOfDrivers = drivers.slice();
       copyOfDrivers.unshift(name);
       return copyOfDrivers;
      }

      function removeLastDriver() {
        const copyOfDrivers = drivers.slice();
        copyOfDrivers.pop(name);
        return copyOfDrivers;
      }
       function removeFirstDriver() {
        const copyOfDrivers = drivers.slice();
        copyOfDrivers.shift(name);
        return copyOfDrivers;
      }