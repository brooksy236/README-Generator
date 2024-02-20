const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    inquirer.prompt([
        {   
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName'
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
            choices: ['MIT', 'Apache', 'GNU General Public License', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero v1.0 Univeral', 'Eclipse Public', 'GNU Affero General Public', 'GNU Lesser General Public', 'Mozilla Public', 'The Unlicense' ]
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
    ])
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data), err => {
        if (err) {
            console.log('Please answer all the questions.')
        }
        console.log('README is being generated')
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(writeToFile);
}

// function call to initialize program
init();
