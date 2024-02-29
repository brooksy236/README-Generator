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
            choices: [  {name: 'MIT', value: 'MIT'}, 
                        {name: 'Apache license 2.0', type: 'Apache2.0',}, 
                        {name: 'GNU General Public License v2.0', type: 'GPL2.0',}, 
                        {name: 'BSD 2-clause "Simplified" license', type: 'BSD2Clause',}, 
                        {name: 'BSD 3-clause Clear license', type: 'BSD3Clause'}, 
                        {name: 'Creative Commons Zero v1.0 Universal', type: 'CC1.0'}, 
                        {name: 'Eclipse Public License 1.0', type: 'EPL1.0'}, 
                        {name: 'GNU Affero General Public License v3.0', type: 'AGPL3.0'}, 
                        {name: 'GNU Lesser General Public License family', type: 'LGPL'}, 
                        {name: 'Mozilla Public License 2.0', type: 'MPL2.0'}, 
                        {name: 'Unlicense', type: 'Unlicense'}, 
                        {name: 'None', type: 'None'} ]
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
