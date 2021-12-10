var inquirer = require("inquirer");
const cp = require("child_process");


function displayDetails() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Selection",
        choices: ["About", "Skills", "Projects", "Academics", "Exit"],
      }
    ])
    .then((choices) => {
      if (choices.Selection == "About") 
      {
        console.log(`Passionate for software development. 
        Looking for the SDE I role in a professional working environment in an employee friendly company`);
        displayNext();
      } 
      else if (choices.Selection == "Skills") 
      {
        console.log("JS, Node, React, Java");
        displayNext();
      } 
      else if (choices.Selection == "Projects") 
      {
        cp.execSync("start chrome https://github.com/Shivam033");
        displayNext();
      } 
      else if (choices.Selection == "Academics") 
      {
        cp.execSync(
          "start chrome https://drive.google.com/file/d/1U79SMpjtQ5i24EPowA_IyCajb-dNFwtU/view?usp=sharing"
        );
        displayNext();
      }
      else if (choices.Selection == "Exit")
      {
        process.exit();
      }
    })
}

displayDetails();

function displayNext() {
  var inquirer = require("inquirer");
  inquirer
    .prompt([
        { 
            type: "list", 
            name: "GoBack", 
            choices: ["Back", "Exit"] 
        }
    ])
    .then((choice) => {
      if (choice.GoBack == "Back") {
        displayDetails();
      }
      else if (choice.GoBack == "Exit")
      {
        process.exit();
      }
    });
}
