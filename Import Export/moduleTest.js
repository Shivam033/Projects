const calculatorModule = require("./calculator");
// Here you will import your module
const factModule = require("./factorial");

// use your imported methods
calculatorModule.division(15, 3);
calculatorModule.addition(45, 21);
calculatorModule.subtraction(65, 59);
calculatorModule.multiply(121, 54);
// self
factModule.fact(5);
