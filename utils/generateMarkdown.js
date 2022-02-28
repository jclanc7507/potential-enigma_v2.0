// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
  // 'Apache License 2.0', svg-apache, 'https://www.apache.org/licenses/LICENSE-2.0.html'
  // 'GNU General Public License v3.0', svg-gpl3, 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  // 'MIT License', svg-mit, 'https://mit-license.org/'
  // 'Mozilla Public License 2.0', svg-mpl, 'https://www.mozilla.org/en-US/MPL/2.0/'
const generateLicense = license => {
    if (!license) {
      return '';
    }
  
    return `
      ${data.apache}
      ${data.gpl3}
      // ${data.mit}
      // ${data.mpl}
    `;
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

  ## Description

  ${data.description}

  ## Deployed Link
  ${data.deployed}

  ## Table of Contents
----------------
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributors](#contributors)
4. [Contribution](#contribution)
5. [Test](#test)
6. [Contact Info](#contact)
7. [License](#license)
----------------

## Installation 
${data.installation}





## Usage
${data.usage}





## Contributors
${data.contributors}




## Contributing
${data.contribution}





## Testing
${data.test}




## License
${data.license}

---

### Contact Info
Name: ${data.name}

Email: ${data.email}

GitHub Account: [${data.github}](https://www.github.com/${data.github})

---
@ 2022 ${data.name}

Confidential and Proprietary. All Rights Reserved.

`;
}
generateLicense();

module.exports = generateMarkdown;