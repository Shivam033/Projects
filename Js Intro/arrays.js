let arr = [1, 2, "Hello", 4]; //initialized with square brackets
// In js single array can have data of diff datatypes
// console.log(arr);
// ARRAY METHODS

let cars = ["audi", "bmw", "merc"];
// console.log(cars);
// REPLACE

cars[1] = "jaguar";
// console.log(cars);

// ADD NEW ELEMENT TO ARRAY
cars[3] = "bentley";
// console.log(cars);
console.log(cars.length);

// ARRAYS MANIPULATION METHODS
// .pop() - takes out element from the end of the array

console.log(cars.pop());
console.log(cars);

// .push() - adds an element at the end of an array

cars.push("wagonR");
console.log(cars);

// shift - it removes element from starting of the array
cars.shift();
console.log(cars);

cars.unshift("ducati");
console.log(cars);
