const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name your Project.",
      },
      {
        type: "input",
        name: "description",
        message: "Please explain the functionality of your project and why it was made",
      },
      {
        type: "input",
        name: "table",
        message: "Please insert table of contents"
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
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
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
      },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
