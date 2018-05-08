// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

// modify the array by destructively (modifying original array)
//end of array
function destructivelyAppendDriver(name)
        {drivers.push(name)};

// modify the array by destructively (modifying original array)
//beg of array
function destructivelyPrependDriver(name)
        {drivers.unshift(name)}

        // modify the array by destructively (modifying original array)
        //end of array
function destructivelyRemoveLastDriver()
        {drivers.pop()}

        // modify the array by destructively (modifying original array)
        //beg of array
function destructivelyRemoveFirstDriver()
        {drivers.shift()}


        // modify the array by destructively (modifying original array)
        //beg of array
function appendDriver(name)
        {return [...drivers, name]}
        // non destructive
function prependDriver(name)
      {return [name, ...drivers]}


function removeFirstDriver(){
      return drivers.slice(1)
}

function removeLastDriver(){
      return drivers.slice(0, drivers.length-1)
}

//.SLICE()
//To remove elements from an array nondestructively (without manipulating the original array), we can use the .slice() method. Just as the name implies, the .slice() method returns a portion, or slice, of an array.
//WITH NO ARGUMENTS
//If we don't provide any arguments, .slice() will return a copy of the original array with all elements intact:
//WITH ARGUMENTS
//We can provide two arguments to .slice(), the index where the slice should begin and the index before which it should end:

//.SPLICE()
//While .slice() allows us to return a piece of an array without mutating the original (nondestructive), .splice() performs destructive actions. Let's familiarize ourselves with the MDN documentation:
//The first argument expected by .splice() is the index at which to begin the splice. If we only provide the one argument, .splice() will destructively remove a chunk of the original array beginning at the provided index and continuing to the end of the array:

//WITH TWO ARGUMENTS
//array.splice(start, deleteCount)
//When we provide two arguments to .splice(), the first is still the index at which to begin splicing, and the second dictates how many elements we want to remove from the array. For example, to remove 3 elements, starting with the element at index 2:
//REPLACING ELEMENTS IN AN ARRAY
//.SPLICE() WITH 3+ ARGUMENTS
//array.splice(start, deleteCount, item1, item2, ...)
//After the first two, every additional argument passed to .splice() will be inserted into the array at the position indicated by the first argument. We can replace a single element in an array as follows, discarding a card and drawing a new one:
