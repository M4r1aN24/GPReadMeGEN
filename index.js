const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions =[
    inquirer.prompt([
    // The title of my project
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    // Description
    {
      type: 'input',
      name: 'description',
      message: 'Please input a short description of your project',
    },
    // Table of Contents
    {
      type: 'input',
      name: 'contents',
      message: 'Table of contents:',
    },
    // Installation
    {
      type: 'input',
      name: 'installation',
      message: 'Please input the installation process.',
    },
    // Usage
    {
      type: 'input',
      name: 'usage',
      message: 'How to use the project?',
    },
    // License
    {
        type: 'list', // Use list type for multiple-choice options
        name: 'license',
        message: 'Please select your license:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    // Contributing
    {
        type: 'input',
        name: 'contribution',
        message: 'Who worked on the project?'
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What type of test have you ran?'
    },
    // Questions
    {
        type: 'input',
        name: 'questions',
        message: "If there's any questions or request, you can contact me at: gabrielpamfill2000@yahoo.com."
    },
  ]),
];

// function to write README file
function writeToFile(fileName, data) {


}

// function to initialize program
function init() {

}

// function call to initialize program
init();
