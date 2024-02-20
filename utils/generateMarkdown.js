// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



  ## Description
  - ${data.description}

  ## Table of Contents

  - [License](#license)
  - [Installation](#installation instructions)
  - [Usage](#usage information)
  - [Contribution](#contributon guidelines)
  - [Tests](#test instructions)
  - [Questions](#questions)

  ## Installation Instructions
  - ${data.installation}

  ## Usage Information
  - ${data.usage}

  ## Contributuon Guidelines
  - ${data.contribution}

  ## Test Instructions
  - ${data.test}

  ## Questions

  If you have any questions about my repo feel free to email me at ${data.email}. 
  You can find more of my work at (https://github.com/${data.github}/).
  

  ## License
  - ${renderLicense(data.license)}
`;
}

module.exports = generateMarkdown;
