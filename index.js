// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//Questions: choose a license w/badge&link, 

const questions = readmeData => {
    console.log(`
======================
Create a New README.md
======================
`);

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
            name: 'deployed',
            message: 'What is the deployed link for your project? (Required)',
            validate: deployed => {
                if (deployed) {
                    return true;
                } else {
                    console.log('Please enter a functional link.')
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
            name: 'installation',
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
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Eclipse Public License 2.0',
                'Mozilla Public License 2.0']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project? Please separate your answers with a comma. (Required)',
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
            type: 'input',
            name: 'contribution',
            message: 'Please provice some instructions on how to contribute to this project.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide some instructions on how to run test/s inside the project.'
        }
    ])
};

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }  
        resolve({
          ok: true,
          message: 'README.md created.'
        });
      });
    });
};

// Function call to initialize app
questions()
    // writes new README.md file to dist folder
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    // fulfills promise to write the file
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return writeFile();
    })
    // catches and console logs if there is an error
    .catch(err =>{
        console.log(err);
    });
