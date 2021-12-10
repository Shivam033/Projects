//  Objects
// Always in a key value pair

let obj = {};

let cap = {
  //  key   :  value
  fName: "Steve",
  lName: "Rogers",
  friends: ["Bucky", "Tony", "Banner"],
  isAvenger: true,
  age: 150,
  address: {
    state: "NY",
    city: "Manhtten",
  },

  sayHi: function fn() {
    console.log("Cap says Hi");
  },
};

// DOT NOTATION

// console.log(cap);
// console.log(cap.friends[0]);
// BRACKET NOTATION
// console.log(cap["address"]);
// function call
// cap.sayHi();

// UPDATE OBJECT
cap.isAvenger = false;
// console.log(cap.isAvenger);

// CREATE SOMETHING INSIDE AN OBJECT
cap.movies = ["First Avenger", "age of ultron", "Endgame", "Infinity war"];

// console.log(cap.movies);
// DELETE IN OBJECT

// delete cap.age;
// console.log(cap);

// Special loop (for in loop)

for (let key in cap) {
  console.log("Key->", key, "Value->", cap[key]);
}
