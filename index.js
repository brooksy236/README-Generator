const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {   
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title'
        },
        {   
            type: 'input',
            message: 'Please give a description of the project:',
            name: 'description'
        },
        {   
            type: 'input',
            message: 'Please enter any installation instructions:',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please enter any usage information:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please enter any contribution guidelines:',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Please enter any test instructions:',
            name: 'test'
        },
        {
            type: 'list',
            message: 'Please choose a license:',
            name: 'license',
            choices: ['MIT', 'Apache-2.0', 'GPL-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSL-1.0', 'CC-1.0', 'EPL-1.0', 'AGPL-3.0', 'LGPL', 'MPL-2.0', 'Unlicense', 'none' ]
        },
        {
            type: 'input',
            message: 'Please enter your GitHub user name:',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Please enter your Email address:',
            name: 'email'
        }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join('./example', fileName), data); // writes the new README to the 'example' folder
    
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((reponses) => {
        console.log("Generating README file...");
        writeToFile('README.md', generateMarkdown(reponses));
    })
}

// function call to initialize program
init();
