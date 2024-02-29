// function to generate the license badge
function generateLicense(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

   ${generateLicense(data.license)}

  ## Description
  - ${data.description}

  ## Table of Contents

  - [License](#license)
  - [Installation](#installation-instructions)
  - [Usage](#usage-information)
  - [Contribution](#contribution-guidelines)
  - [Tests](#test-instructions)
  - [Questions](#questions)

  ## Installation Instructions
  - ${data.installation}

  ## Usage Information
  - ${data.usage}

  ## Contribution Guidelines
  - ${data.contribution}

  ## Test Instructions
  - ${data.test}

  ## Questions

  - If you have any questions about my repo feel free to email me at ${data.email}. 
  - You can find more of my work at (https://github.com/${data.github}/).
  

  ## License
  - ${data.license}
`;
}

module.exports = generateMarkdown;
