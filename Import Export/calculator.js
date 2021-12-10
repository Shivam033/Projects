function add(a, b) {
  console.log("The sum is ", a + b);
}
function subtract(a, b) {
  console.log("The diff is ", a - b);
}
function mul(a, b) {
  console.log("The product is ", a * b);
}
function div(a, b) {
  console.log("The division is ", a / b);
}

module.exports = {
  addition: add,
  subtraction: subtract,
  multiply: mul,
  division: div,
};
// module.export is an OBJECT provided by node.js by which you can export your functions in a key value pair

// you will use your functions with the keys you have
// add(2, 3);
// subtract(8, 2);
// mul(4, 2);
// div(8, 2);
