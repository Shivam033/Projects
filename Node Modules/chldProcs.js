const cp = require("child_process");

// console.log("Trying to open calculator");
// cp.execSync("calc");

// console.log("calculator opened");

// cp.execSync("code");
// cp.execSync("start chrome https://www.pepcoding.com");
let op = cp.execSync("node test.js");
console.log("Output is " + op);
