// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter your project title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("Give a description of your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("List installation steps");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project's usage for?",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("How to use this product ");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("Information on how to contribute to this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("Explain how to test this project");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: ["Apache", "Boost", "Eclipse", "IBM", "MIT", "Mozilla"],
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter yoiur GitHub username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter your email");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("You can now preview your README file");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
