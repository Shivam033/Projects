var figlet = require("figlet");

figlet("Neha is LOVE!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
//HOW TO INSATALL A PACKAGE
//
