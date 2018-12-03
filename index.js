// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver() {
   drivers.push('Ralph');
 }

 function destructivelyPrependDriver(){
     drivers.unshift('Bob');
 }

 function destructivelyRemoveFirstDriver(){
    drivers.shift();

}

function destructivelyRemoveLastDriver(){
    const drivers = ["Milo", "Otis", "Garfield"];
    drivers.pop();
}


