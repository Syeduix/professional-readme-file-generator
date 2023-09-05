
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your title",
  },
  {
    type: "input",
    name: "entitled",
    message: "Sections entitled:",
  },
  {
    type: "input",
    name: "Description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "table",
    message: "Table of Contents",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation",
  },
  {
    type: "input",
    name: "Usage",
    message: "Statete languages or technologies associated with this project",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license appllicable to this project.",
    choices: [
      "MIT",
      "APPACHE2.0",
      "Boost1.0",
      "MPL2.0",
      "BSD2",
      "BSD3",
      "none",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Contributing",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests",
  },
  {
    type: "input",
    name: "questions",
    message: "Questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File....");
    writeToFile("./dist/README.md", generateMarkdown(responses));
  });
}

// function call to initialize program
init();
