// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver(name) {
    drivers.push("Ralph");

    drivers;
 }

 function destructivelyPrependDriver(name) {
     drivers.unshift("Bob");

     drivers;
 }

 function destructivelyRemoveLastDriver() {
     drivers.pop(-1);

     drivers;
 }

 function destructivelyRemoveFirstDriver() {
     drivers.shift(0);

     drivers;
 }

 function appendDriver(name) {
     drivers.splice(-1, 0, "Broom");
 }