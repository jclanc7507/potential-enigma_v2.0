// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//Questions: choose a license w/badge&link, 

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username. (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter a valid GitHub username.');
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'emailConfirm',
            message: 'Would you like to include an email for others to contact you?',
            default: false
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide a valid email address. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Plsease enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter something as a name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter something as a description.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'includeInstructions',
            message: 'Would you like to add installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide installation instructions.',
            when: ({ includeInstructions }) => includeInstructions
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how your project will be used. (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please enter something as to how to utilize this project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project, otherwise leave blank.',
            choices: [
                'Apache License 2.0', 
                'GNU General Public License v3.0', 
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project? Please separate your answers with a space. (Required)',
            validate: contributors => {
                if (contributors) {
                    return true;
                } else {
                    console.log('Please list at least one contributor for this project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'contributionConfirm',
            message: 'Would you like to include contribution instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provice some instructions on how to contribute to this project.',
            when: ({ contribution }) => contribution
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide some instructions on how to run test/s inside the project.'
        }
    ])
};
// TODO: Create a function to write README file
// include a table of contents and that those items are functional links
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions()
    // writes new README.md file to dist folder
    .then(pageMD => {
        return writeToFile(pageMD);
    })
    // makes a new stylesheet
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
