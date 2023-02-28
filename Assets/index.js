const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "Please enter the name your Project.",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please explain the functionality of your project and why it was made",
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependancies?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "please insert path to image file.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors.",
  },
  {
    type: "input",
    name: "tests",
    message: "what command should be run to run tests?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log("writing file");
    writeToFile("./README.md", generateMarkdown(data));
  });
}

// function call to initialize program
init();
