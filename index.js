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
            when: ({ emailConfirm }) => emailConfirm,
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
            type: 'confirm',
            name: 'apache',
            message: 'Would you like to use the Apache License 2.0?',
            default: false,
            validate: apache => {
                if (apache) {
                    return true;
                } else {
                    return false;
                }                
            }
        },
        {
            type: 'confirm',
            name: 'gpl3',
            message: 'Would you like to use the GNU General Public License v3.0?',
            default: false,
            validate: gpl3 => {
                if (gpl3) {
                    return true;
                } else {
                    return false;
                }                
            }
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
            type: 'confirm',
            name: 'contributionConfirm',
            message: 'Would you like to include contribution instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provice some instructions on how to contribute to this project.',
            when: ({ contributionConfirm }) => contributionConfirm
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
