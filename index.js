const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

function generateTableOfContents(sections) {
    const toc = sections.map((section, index) => {
        const sectionLink = `[${index + 1}. ${section}](#${section.toLowerCase().replace(/\s/g, '-')})`;
        return sectionLink;
    });
    return toc.join('\n');
}

const sections = ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];

// array of questions for user
const questions =[
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
        type: 'confirm',
        name: 'questions',
        message: "If there's any questions or request, you can contact me at: gabrielpamfill2000@yahoo.com."
    },
  ];

// // function to write README file
inquirer.prompt(questions).then((answers) => {
    // Create the README content
    const readmeContent = `
# ${answers.title}

${answers.description}

## Table of Contents

${generateTableOfContents(sections)}

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the ${answers.license} License.

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## Questions

If you have any questions or requests, you can contact me at: ${answers.questions}
`;

    // Write the content to the README file
    fs.writeFileSync('README.md', readmeContent, 'utf-8');

    console.log('README.md file has been created successfully.');
});


// function writeToFile(fileName, data) {
    

// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
