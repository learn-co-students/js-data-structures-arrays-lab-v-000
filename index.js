// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver() {
   drivers.push('Ralph');
 }

 function destructivelyPrependDriver(){
     drivers.unshift('Bob');
 }

 function destructivelyRemoveLastDriver(){
    drivers.pop();
}
 function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

// >>>>>>> EVERY code Below Here Is not DESTRUCTIVE<<<<<<<

function appendDriver(){
    const newArray = [...drivers, 'Broom'];
    return newArray;
}

function prependDriver(){
    const newArray= ['Arnold', ...drivers];
    return newArray;
}

function removeLastDriver(){
    const newArray = drivers.slice(0, drivers.length - 1);
    return newArray;
}

function removeFirstDriver(){
    const newArray = drivers.slice(1);
    return newArray;
}







